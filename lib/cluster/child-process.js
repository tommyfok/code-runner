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
        let codeKey = msg.codeKey
        let context = strval(msg.context) || {}
        let contextObj = typeof context === 'string' ? {context} : context
        contextObj.processSend = (...args) => {
            return process.send(...args)
        }
        contextObj.console = console
        contextObj.setTimeout = setTimeout
        contextObj.clearTimeout = clearTimeout
        contextObj.setInterval = setInterval
        contextObj.clearInterval = clearInterval
        vm.createContext(contextObj)
        let code = `
(async function () {
    ${msg.code}
})()
.then(res => {
    processSend({
        name: 'TRC_RUN_SUCCESS',
        data: res
    })
    console.log(\`执行代码完毕,codeKey=${codeKey}\`, res)
})
.catch(e => {
    processSend({
        name: 'TRC_RUN_FAIL',
        data: e.message
    })
    console.log(\`执行代码失败,codeKey=${codeKey}\`, e)
})
`
        try {
            vm.runInContext(code, contextObj)
        } catch (e) {
            process.send({
                name: 'TRC_RUN_FAIL',
                data: e.message
            })
            console.log(`执行代码失败,codeKey=${codeKey}`, e)
        }
        process.send({
            name: 'TRC_UPDATE_TIME'
        })
    }
})
