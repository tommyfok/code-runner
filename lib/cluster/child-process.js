const vm = require('vm')
const assert = require('assert')
const strval = require('../common/strval')
const processSend = (name, data) => {
    return process.send({
        name,
        data
    })
}

var lastCpuUsage = process.cpuUsage()
var lastUpdateTs = Date.now()

// 每秒都有心跳💖
setInterval(() => {
    let cpuUsage = process.cpuUsage(lastCpuUsage)
    let now = Date.now()
    let tdiff = (now - lastUpdateTs) * 1000
    processSend('TRC_HEART_BEAT', {
        cpuUsage: {
            user: cpuUsage.user / tdiff,
            system: cpuUsage.system / tdiff
        },
        memoryUsage: process.memoryUsage()
    })
    lastCpuUsage = cpuUsage
    lastUpdateTs = Date.now()
}, 1000)

process.on('exit', code => {
    console.log('process exit with code ', code)
})

process.on('message', msg => {
    if (msg.name === 'TRC_RUN_CODE') {
        let codeKey = msg.codeKey
        let context = strval(msg.context) || {}
        let contextObj = typeof context === 'string' ? {
            context
        } : context
        contextObj.processSend = processSend
        contextObj.console = console
        contextObj.setTimeout = setTimeout
        contextObj.clearTimeout = clearTimeout
        contextObj.setInterval = setInterval
        contextObj.clearInterval = clearInterval
        contextObj.require = moduleName => {
            assert.ok(moduleName, 'module name required')
            if (msg.allowModules.indexOf(moduleName) > -1) {
                return require(moduleName)
            } else {
                throw `module ${moduleName} not found`
            }
        }
        vm.createContext(contextObj)
        let code = `
(async function () {
    ${msg.code}
})()
.then(res => {
    processSend('TRC_RUN_SUCCESS', res)
    console.log(\`执行代码完毕,codeKey=${codeKey}\`, res)
})
.catch(e => {
    processSend('TRC_RUN_FAIL', e.message)
    console.log(\`执行代码失败,codeKey=${codeKey}\`, e)
})
`
        try {
            vm.runInContext(code, contextObj)
        } catch (e) {
            processSend('TRC_RUN_FAIL', e.message)
            console.log(`执行代码失败,codeKey=${codeKey}`, e)
        }
        processSend('TRC_UPDATE_TIME')
    }
})
