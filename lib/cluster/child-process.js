const vm = require('vm')
const strval = require('../common/strval')

var lastCpuUsage

// 每秒都有心跳💖
setInterval(() => {
    let cpuUsage = process.cpuUsage(lastCpuUsage)
    process.send({
        name: 'TRC_HEART_BEAT',
        data: {
            cpuUsage,
            memoryUsage: process.memoryUsage()
        }
    })
    lastCpuUsage = cpuUsage
}, 1000)

process.on('exit', code => {
    console.log('process exit with code ', code)
})

process.on('message', msg => {
    if (msg.name === 'TRC_RUN_CODE') {
        let code = msg.code
        let codeKey = msg.codeKey
        let context = strval(msg.context) || {}
        let contextObj = typeof context === 'string' ? {context} : context
        contextObj.sendMsg = process.send
        contextObj.console = console
        contextObj.setTimeout = setTimeout
        contextObj.setInterval = setInterval
        vm.createContext(contextObj)
        try {
            vm.runInContext(code, contextObj)
            process.send({
                name: 'TRC_RUN_SUCCESS'
            })
            console.log(`执行代码成功,codeKey=${codeKey}`)
        } catch (e) {
            process.send({
                name: 'TRC_RUN_FAIL',
                data: e.message
            })
            console.log(`执行代码成功,codeKey=${codeKey}`, e)
        }
        process.send({
            name: 'TRC_UPDATE_TIME'
        })
    }
})
