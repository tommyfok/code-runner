const strval = require('../common/strval')
const hash = require('../common/hash')
const child_process = require('child_process')
const path = require('path')

module.exports =  class ChildProcess {
    constructor () {
        this.eventListeners = {}
        this.lastActiveTimestamp = Date.now()
        this.lastHeartBeatTime = Date.now()
        this.cpuUsage = {}
        this.memoryUsage = {}
        this.child_process = child_process.fork(path.join(__dirname, 'child-process.js'))
        // 接收来自子进程的事件
        this.child_process.on('message', event => {
            let name = event.name
            if (name && name in this.eventListeners) {
                this.eventListeners[name](event.data, this)
            }
        })
    }
    // 执行代码，其实是向子进程发送消息
    runCode ({code, context, listeners}) {
        this.code = code
        this.codeKey = this.codeKey || hash(code)
        let _ctx = strval(context) || {}
        _ctx.TCR_GLOBALS = {}
        return new Promise((resolve, reject) => {
            this._resolve = resolve
            this._reject = reject
            this.eventListeners = listeners
            this.child_process.send({
                name: 'TRC_RUN_CODE',
                code,
                codeKey: this.codeKey,
                context: JSON.stringify(_ctx)
            })
            this.lastActiveTimestamp = Date.now()
        })
    }
}
