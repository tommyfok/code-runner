const hash = require('../common/hash')
const Container = require('./process-container')
const defaultListeners = require('../listener/default')
const assert = require('assert')

module.exports = class PM {
    constructor({
        count,
        maxFreeSeconds = 60,
        maxFrozenSeconds = 10,
        maxCount = 100,
        filePath
    }) {
        this.cpPath = filePath
        this.maxFreeSeconds = maxFreeSeconds
        this.maxFrozenSeconds = maxFrozenSeconds
        this.maxCount = maxCount
        this.workProcessMap = {}
        this.workProcessList = []
        this.freeProcessList = []
        // 创建一定数量的子进程
        if (count) {
            for (let i = 0; i < Math.min(count, maxCount); i++) {
                this.freeProcessList.push(new Container(this.cpPath))
            }
        } else {
            this.autoAddContainer()
        }
        // 每秒钟检查健康进程
        setInterval(() => {
            this.healthControl()
            this.autoAddContainer()
        }, 1000)
        // 每分钟检查做清理和调整
        setInterval(() => {
            this.removeRedundantContainers()
        }, 1000 * 60)
        // 若进程退出，则杀掉所有子进程
        process.on('exit', code => {
            this.workProcessList.forEach(p => {
                p.child_process.kill(code || 'SIGINT')
            })
            this.freeProcessList.forEach(p => {
                p.child_process.kill(code || 'SIGINT')
            })
        })
    }
    // 执行代码
    async run({
        code,
        context = {},
        listeners = {}
    }) {
        assert.ok(code, 'code required')
        let container
        try {
            container = this.getContainer(code)
        } catch (e) {
            console.log('Get Container Failed:', e)
            return {
                success: false,
                message: e.message || e,
                status: 502
            }
        }
        let runResult = await container.runCode({
            code,
            context,
            listeners
        })
        return {
            success: true,
            data: runResult
        }
    }
    // 获取容器
    getContainer(code) {
        let codeKey = hash(code)
        if (codeKey in this.workProcessMap) {
            return this.workProcessMap[codeKey]
        } else {
            if (this.freeProcessList.length === 0) {
                if (this.workProcessList.length < this.maxCount) {
                    let fpc = new Container(this.cpPath)
                    fpc.code = code
                    this.workProcessList.push(fpc)
                    this.workProcessMap[codeKey] = fpc
                    return fpc
                } else {
                    throw 'NO_AVAILABLE_CONTAINER' // 502
                }
            } else {
                let fpc = this.freeProcessList.pop()
                fpc.code = code
                this.workProcessList.push(fpc)
                this.workProcessMap[codeKey] = fpc
                return fpc
            }
        }
    }
    // 健康管理
    healthControl() {
        let now = Date.now(),
            len = this.workProcessList.length
        for (let wpcIndex = 0; wpcIndex < len; wpcIndex++) {
            let wpc = this.workProcessList[wpcIndex]
            // 发现进程超过一定时间没有执行代码（1分钟），就放入空闲进程
            if (now - wpc.lastActiveTimestamp > (this.maxFreeSeconds * 1000)) {
                this.freeProcessList.push(wpc)
                this.workProcessList[wpcIndex] = undefined
                delete this.workProcessMap[wpc.codeKey]
                delete wpc.codeKey
                delete wpc.code
            }
            // 发现进程太久没有心跳（默认10秒）就kill掉并释放资源
            if (now - wpc.lastHeartBeatTime > this.maxFrozenSeconds * 1000) {
                console.log('process is dead:', wpc.codeKey, 'pid', wpc.child_process.pid)
                console.log('start to create new process')
                delete this.workProcessMap[wpc.codeKey]
                this.workProcessList[wpcIndex] = undefined
                let pid = wpc.child_process.pid
                for (let rejKey in wpc.rejectorMap) {
                    try {
                        wpc.rejectorMap[rejKey]('PROCESS_IS_DEAD')
                    } catch (e) {}
                }
                // 给点时间给rejector执行
                setTimeout(() => {
                    wpc.resolverMap = {}
                    wpc.rejectorMap = {}
                    console.log('child_process killed: ' + wpc.child_process.pid)
                    wpc.child_process.kill('SIGINT')
                }, 5000)
                this.freeProcessList.push(new Container(this.cpPath))
                console.log('new free process created')
            }
        }
        // clean up
        this.workProcessList = this.workProcessList.filter(p => p)
    }
    // 清理多余空闲进程
    removeRedundantContainers() {
        let fpcount = this.freeProcessList.length
        let wpcount = this.workProcessList.length
        let newFpCount = Math.floor((this.maxCount - wpcount) / 3)
        if (fpcount > newFpCount && fpcount > 2) { // 最少保留2个空闲容器
            let removeCount = fpcount - newFpCount
            for (let i = 0; i < removeCount; i++) {
                let fp = this.freeProcessList.pop()
                console.log('child_process killed: ' + fp.child_process.pid)
                fp.child_process.kill('SIGINT')
            }
        }
    }
    // 智能扩容
    autoAddContainer() {
        let fpcount = this.freeProcessList.length
        let wpcount = this.workProcessList.length
        // 应有空闲容器数=容器数<(最大容器数-2) ? Math.max(2, Math.floor((最大容器数-已有容器数)/3)) : 0
        let pcount = fpcount + wpcount
        let newFpCount = pcount < (this.maxCount - 2) ? Math.max(2, Math.floor((this.maxCount - pcount) / 3)) : 0
        if (fpcount < newFpCount) {
            for (let i = 0; i < newFpCount - fpcount; i++) {
                this.freeProcessList.push(new Container(this.cpPath))
            }
        }
    }
}
