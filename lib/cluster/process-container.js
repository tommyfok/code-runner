const strval = require('../common/strval')
const hash = require('../common/hash')
const child_process = require('child_process')
const path = require('path')
const assert = require('assert')
const defaultListeners = require('../listener/default')
const defaultAllowModules = ['assert', 'request', 'request-promise', 'moment']
const uuidv4 = require('uuid/v4')

module.exports = class ChildProcess {
    constructor(cpPath) {
        assert.ok(cpPath, 'child-process filePath required.')
        this.eventListeners = defaultListeners(this)
        this.lastActiveTimestamp = Date.now()
        this.lastHeartBeatTime = Date.now()
        this.cpuUsage = {}
        this.memoryUsage = {}
        this.resolverMap = {}
        this.rejectorMap = {}
        this.child_process = child_process.fork(cpPath, [], {slient:true}) // slient让子进程的log冒上去
        // 接收来自子进程的事件
        this.child_process.on('message', event => {
            let name = event.name
            if (name && (name in this.eventListeners)) {
                this.eventListeners[name](event.data, this)
            }
        })
    }
    // 执行代码，其实是向子进程发送消息
    runCode({
        code,
        context,
        listeners = {},
        allowModules = defaultAllowModules
    }) {
        assert.ok(code, 'code required')
        let requestId = uuidv4()
        this.codeKey = this.codeKey || hash(code)
        let _ctx = strval(context) || {}
        _ctx.TCR_GLOBALS = {}
        return new Promise((resolve, reject) => {
            resolve.bind(null)
            reject.bind(null)
            this.sendRunCmd({
                requestId,
                resolver: resolve,
                rejector: reject,
                code,
                listeners,
                codeKey: this.codeKey,
                context: JSON.stringify(_ctx),
                allowModules
            })
        })
    }
    // 发送执行代码命令
    sendRunCmd({
        requestId,
        resolver,
        rejector,
        code,
        listeners,
        codeKey,
        context,
        allowModules
    }) {
        this.resolverMap[requestId] = resolver
        this.rejectorMap[requestId] = rejector
        Object.assign(this.eventListeners, listeners)
        this.child_process.send({
            name: 'TRC_RUN_CODE',
            code,
            requestId,
            codeKey,
            context,
            allowModules
        })
        this.lastActiveTimestamp = Date.now()
    }
}
