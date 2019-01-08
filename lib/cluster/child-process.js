const strval = require('../common/strval')

module.exports =  class ChildProcess {
    constructor () {
        this.eventListeners = {}
        this.lastActiveTimestamp = Date.now()
        this.lastHeartBeatTime = Date.now()
        this.cp = child_process.fork('./child-process-tpl')
        // 接收来自子进程的事件
        this.cp.on('message', event => {
            let name = event.name
            if (name && name in this.eventListeners) {
                this.eventListeners[name](event.data, this)
            }
        })
    }
    // 执行代码，其实是向子进程发送消息
    runCode ({code, context, listeners}) {
        return new Promise((resolve, reject) => {
            this._resolve = resolve
            this._reject = reject
            this.eventListeners = listeners
            this.cp.send({
                name: 'TRC_RUN_CODE',
                code,
                context: JSON.stringify(strval(context))
            })
            this.lastActiveTimestamp = Date.now()
        })
    }
}
