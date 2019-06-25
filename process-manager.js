const assert = require('assert')
const hash = require('./common/hash')
const ChildProcess = require('./child-process')

class ProcessManager {
    constructor({
        scriptPath,
        processCount,
        maxProcessCount,
        onLog,
        onErr,
        onHealthStatus,
        onCodeResult
    }) {
        assert.ok(processCount > 0, 'processCount必须大于0')
        // 初始化实例
        this.onLog = onLog
        this.onErr = onErr
        this.onHealthStatus = onHealthStatus
        this.onCodeResult = onCodeResult
        this.processCount = processCount
        this.maxProcessCount = maxProcessCount || (processCount * 2)
        this.scriptPath = scriptPath
        this.processPool = []
        this.codeProcessMap = {}

        // 创建一定数量的子进程
        for (let i = 0; i < processCount; i++) {
            this.createProcess()
        }

        // 定期循环
        setInterval(() => {
            // 重置无用进程
            this._resetInvalidCp()
        }, 1000)
    }

    /* Container Manager */
    // 新建子进程
    createProcess() {
        if (this.processPool.length < this.maxProcessCount) {
            let cp = new ChildProcess({
                scriptPath: this.scriptPath,
                onCodeResult: this.onCodeResult,
                onLog: this.onLog,
                onErr: this.onErr,
                onHealthStatus: this.onHealthStatus
            })
            this.processPool.push(cp)
            return cp
        }
    }

    // 根据代码获取合适的子进程
    getChildProcess(params) {
        let code = params.code
        let codeId = hash(code)
        if (codeId in this.codeProcessMap) {
            return this.codeProcessMap[codeId]
        } else {
            let freeCps = this.processPool.filter(cp => cp.free)
            if (freeCps.length) {
                let now = Date.now()
                let cp = freeCps[0]
                cp.free = false
                cp.lastHeartBeatTime = now
                cp.lastActiveTime = now
                this.codeProcessMap[codeId] = cp
                return cp
            } else {
                let cp = this.createProcess()
                if (cp) {
                    return cp
                } else {
                    this.onCodeResult({
                        success: false,
                        err: new Error('没有空闲子进程'),
                        innerRequestId: params.innerRequestId,
                        userRequestId: params.userRequestId
                    })
                }
            }
        }
    }

    // 执行代码，例如：
    // params.code = `
    //     let knex = this.db('albumgroup')
    //     return {
    //         body: yield knex('user').where('id', 10)
    //     }
    // `
    runCode(params) {
        let cp = this.getChildProcess(params)
        if (cp) {
            cp.runCode(params)
        }
    }

    // 重置无效子进程
    _resetInvalidCp() {
        let now = Date.now()
        this.processPool.filter(cp => !cp.free).forEach(cp => {
            let tooBusy = now > cp.lastHeartBeatTime + 10 * 1000 // 10秒钟都没有心跳上报的，清理掉
            let tooFree = now > cp.lastActiveTime + 60 * 1000 // 60秒都没人用的，清理掉
            if (tooBusy || tooFree) {
                let codeId = cp.codeId
                if (codeId && (codeId in this.codeProcessMap)) {
                    delete this.codeProcessMap[codeId]
                }
                console.log(`子进程${cp.child_process.pid}由于${tooFree?'长时间无请求':'过于繁忙'}而被重置`)
                cp.reset()
            }
        })
    }
}

module.exports = ProcessManager
