const hash = require('../common/hash')
const Container = require('./process-container')
const defaultListeners = require('../listener/default')

module.exports =  class PM {
    constructor({
            count,
            maxFreeSeconds = 60,
            maxFrozenSeconds = 10
        }) {
        this.processMap = {}
        this.workingProcessesContainer = []
        this.freeProcessesContainer = []
        process.on('exit', this.cleanCpcs)
        for (let i = 0; i < count; i++) {
            this.freeProcessesContainer.push(new Container())
        }
        // 每秒钟检查进程
        setInterval(() => {
            let now = Date.now()
            this.workingProcessesContainer.forEach(wpc => {
                let wpcIndex = this.workingProcessesContainer.indexOf(wpc)
                // 发现进程上次活跃时间大于1分钟，就放入空闲进程
                if (now - wpc.lastActiveTimestamp > (maxFreeSeconds * 1000)) {
                    this.freeProcessesContainer.push(wpc)
                    this.workingProcessesContainer.splice(wpcIndex, 1)
                    let codeKey = wpc.codeKey
                    delete this.processMap[codeKey]
                    delete wpc.codeKey
                }
                // 发现进程太久没有心跳（默认10秒）就kill掉并释放资源
                if (now - wpc.lastHeartBeatTime > maxFrozenSeconds * 1000) {
                    console.log('process is dead:', wpc.codeKey, 'pid', wpc.child_process.pid)
                    console.log('start to create new process')
                    delete this.processMap[wpc.codeKey]
                    this.workingProcessesContainer.splice(wpcIndex, 1)
                    let pid = wpc.child_process.pid
                    if (wpc._reject) {
                        wpc._reject('PROCESS_IS_DEAD')
                    }
                    wpc.child_process.kill('SIGINT')
                    console.log('child_process killed: ' + pid)
                    this.freeProcessesContainer.push(new Container())
                    console.log('new free process created')
                }
            })
        }, 1000)
    }

    async run ({code, context, listeners}) {
        let container
        try {
            container = this.getContainer(code)
        } catch (e) {
            console.log('Get Container Failed:', e.message)
            return {
                success: false,
                message: e.message,
                error: e
            }
        }
        let runResult = await container.runCode({
            code,
            context,
            listeners: {
                ...listeners,
                ...defaultListeners(this)
            }
        })
        return {
            success: true,
            data: runResult
        }
    }

    getContainer (code) {
        let codeKey = hash(code)
        if (codeKey in this.processMap) {
            return this.processMap[codeKey]
        } else {
            if (this.freeProcessesContainer.length === 0) {
                throw 'NO_AVAILABLE_PROCESS_CONTAINER'
            } else {
                let fpc = this.freeProcessesContainer.pop()
                fpc.code = code
                this.workingProcessesContainer.push(fpc)
                this.processMap[codeKey] = fpc
                return fpc
            }
        }
    }

    cleanCpcs(code) {
        this.workingProcessesContainer.forEach(p => {
            p.child_process.kill(code || 'SIGINT')
        })
        this.freeProcessesContainer.forEach(p => {
            p.child_process.kill(code || 'SIGINT')
        })
    }
}
