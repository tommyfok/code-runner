const child_process = require('child_process')
const assert = require('assert')
const hash = require('./common/hash')
const fs = require('fs')

module.exports = class ChildProcess {
    constructor({
        scriptPath,
        onLog,
        onErr,
        onCodeResult
    }) {
        assert.ok(scriptPath, 'child-process filePath required.')
        this.lastActiveTime = Date.now()
        this.lastHeartBeatTime = Date.now()
        this.cpuUsage = {}
        this.memoryUsage = {}
        this.ready = false
        this.free = true
        this.child_process = null
        this.scriptPath = scriptPath
        this.onLog = onLog
        this.onErr = onErr
        this.onCodeResult = onCodeResult
    }
    // 执行代码，其实是向子进程发送消息
    runCode({
        code,
        innerRequestId,
        userRequestId,
        data
    }) {
        assert.ok(code, 'code required')
        let codeId = hash(code)
        if (!this.child_process) {
            let realFileName = `${codeId}.js`
            let realPathName = path.dirname(this.scriptPath)
            let realFilePath = path.join(realPathName, realFileName)
            if (!fs.existsSync(realFilePath)) {
                let scriptContent = fs.readFileSync(this.scriptPath).toString().replace('DYNAMIC_CODE', code)
                fs.writeFileSync(realFilePath, scriptContent)
            }
            this.child_process = child_process.fork(realFilePath)
            // 接收来自子进程的stdout/stderr/onCodeResult
            this.child_process.stdout.on('data', this.onLog)
            this.child_process.stderr.on('data', this.onErr)
            this.child_process.on('message', ({
                name,
                data
            }) => {
                switch (name) {
                    // 代码执行结束消息
                    case 'RUN_CODE_RESULT':
                        this.onCodeResult(data)
                        break
                        // 心跳消息
                    case 'HEARTBEAT':
                        this.cpuUsage = data.cpuUsage
                        this.memoryUsage = data.memoryUsage
                        this.lastHeartBeatTime = Date.now()
                        // 有心跳表明ready
                        this.ready = true
                        break
                    default:
                        this.onLog({
                            name,
                            data
                        })
                        break
                }
            })
        }
        this.free = false
        if (!this.codeId) {
            this.codeId = hash(code)
        }
        this.child_process.send({
            name: 'RUN_CODE',
            data: {
                innerRequestId,
                userRequestId,
                code,
                context: data
            }
        })
        this.lastActiveTime = Date.now()
    }

    reset() {
        try {
            fs.unlinkSync(`./${this.codeId}.js`)
        } catch (e) {
            console.log(`delete file failed: "./${this.codeId}.js"`)
        }
        this.codeId = null
        this.free = true
        if (this.child_process) {
            this.child_process.kill('SIGINT')
        }
        this.child_process = null
        this.ready = false
        this.cpuUsage = {}
        this.memoryUsage = {}
    }
}
