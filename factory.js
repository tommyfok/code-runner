const uuid = require('uuid/v4')
const ProcessManager = require('./process-manager')

class CodeFactory {
    constructor({
        onLog,
        onErr,
        // 注意了，scriptPath对应的脚本里面一定要有
        // 1. 发送"HEARTBEAT"和"RUN_CODE_RESULT"消息给父进程
        // 2. 处理来自父进程的name="RUN_CODE"的消息
        // 3. DYNAMIC_CODE
        scriptPath,
        maxProcessCount,
        maxTimeout,
        beforeRunCode,
        afterRunCode
    }) {
        this.maxTimeout = (maxTimeout || 60) * 1000
        this.callbacks = {}
        this.codeId2ReqIdsMap = {}
        this.beforeRunCode = beforeRunCode
        this.afterRunCode = afterRunCode
        this.pm = new ProcessManager({
            scriptPath,
            maxProcessCount,
            onLog,
            onErr,
            onCodeResult: ({
                innerRequestId,
                userRequestId,
                err,
                success,
                result
            }) => {
                process.nextTick(() => {
                    let callback = this._popCallback(innerRequestId)
                    if (callback) {
                        if (this.afterRunCode && typeof this.afterRunCode === 'function') {
                            result = this.afterRunCode(result)
                        }
                        callback[(success && !err) ? 'resolve' : 'reject']({
                            userRequestId,
                            err,
                            success,
                            result
                        })
                    }
                })
            }
        })
        setInterval(() => {
            this._cleanTimeoutCallbacks()
        }, 1000)
    }

    runCode(params) {
        let p
        if (this.beforeRunCode && typeof this.beforeRunCode === 'function') {
            p = this.beforeRunCode(params)
        } else {
            p = params
        }
        p.timeout = Math.max(p.timeout, 0)
        p.timeout = Math.min(p.timeout || (10 * 1000), this.maxTimeout)
        let innerRequestId = uuid()
        let userRequestId = p.requestId || innerRequestId
        this.pm.runCode({
            code: p.code,
            innerRequestId,
            userRequestId,
            data: p.data
        })
        let cbObj = {
            timeout: Date.now() + p.timeout,
            userRequestId
        }
        let promise = new Promise((resolve, reject) => {
            cbObj.resolve = resolve
            cbObj.reject = reject
        })
        this.callbacks[innerRequestId] = cbObj
        return promise
    }

    _popCallback(innerRequestId) {
        if (innerRequestId in this.callbacks) {
            let callback = this.callbacks[innerRequestId]
            delete this.callbacks[innerRequestId]
            return callback
        }
    }

    _cleanTimeoutCallbacks() {
        let now = Date.now()
        for (let innerRequestId in this.callbacks) {
            let cbObj = this.callbacks[innerRequestId]
            if (now > cbObj.timeout) {
                cbObj.reject({
                    innerRequestId,
                    userRequestId: cbObj.userRequestId,
                    err: new Error('REQUEST_TIMEOUT'),
                    success: false
                })
                delete this.callbacks[innerRequestId]
            }
        }
    }
}

module.exports = CodeFactory
