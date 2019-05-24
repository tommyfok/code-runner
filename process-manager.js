const hash = require('./common/hash')
const ChildProcess = require('./child-process')

class ProcessManager {
    constructor({
        scriptPath,
        maxProcessCount,
        onLog,
        onErr,
        onCodeResult
    }) {
        this.onLog = onLog
        this.onErr = onErr
        this.onCodeResult = onCodeResult
        this.maxProcessCount = maxProcessCount
        this.scriptPath = scriptPath
        this.processPool = []
        this.codeProcessMap = {}
        // 创建一定数量的子进程
        for (let i = 0; i < maxProcessCount; i++) {
            this.createProcess()
        }
        // 定期重启无响应进程
        setInterval(() => {
            let now = Date.now()
            this.processPool.filter(cp => !cp.free).forEach(cp => {
                let tooBusy = now > cp.lastHeartBeatTime + 10 * 1000 // 10秒钟都没有心跳上报的，清理掉
                let tooFree = now > cp.lastActiveTime + 60 * 1000 // 60秒都没人用的，清理掉
                if (tooBusy || tooFree) {
                    let codeId = cp.codeId
                    if (codeId && (codeId in this.codeProcessMap)) {
                        delete this.codeProcessMap[codeId]
                    }
                    console.log(`cp reset because of ${tooFree?'too free':'too busy'}`)
                    cp.reset()
                }
            })
        }, 1000)
        // 主进程死掉，需要下发清理子进程的命令
        // 但似乎并不生效，为什么
        // process.on('beforeExit', () => {
        //     this.processPool.forEach(cp => {
        //         cp.reset()
        //     })
        // })
    }

    /* Container Manager */
    // 新建子进程
    createProcess() {
        if (this.processPool.length < this.maxProcessCount) {
            let cp = new ChildProcess({
                scriptPath: this.scriptPath,
                onCodeResult: this.onCodeResult,
                onLog: this.onLog,
                onErr: this.onErr
            })
            this.processPool.push(cp)
            return cp
        }
    }

    // 根据代码获取合适的子进程
    getChildProcess (params) {
        let code = params.code
        let codeId = hash(code)
        if (codeId in this.codeProcessMap) {
            return this.codeProcessMap[codeId]
        } else {
            let freeCps = this.processPool.filter(cp => cp.free)
            if (freeCps.length) {
                let cp = freeCps[0]
                cp.free = false
                this.codeProcessMap[codeId] = cp
                return cp
            } else {
                console.log('没有空闲子进程，执行this.onCodeResult', params)
                this.onCodeResult({
                    success: false,
                    err: new Error('没有空闲子进程'),
                    innerRequestId: params.innerRequestId,
                    userRequestId: params.userRequestId
                })
            }
        }
    }

    // 执行代码，例如：
    // code = `
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
}

module.exports = ProcessManager
