const vm = require('vm')
const strval = require('../common/strval')

setInterval(() => {
    process.send({
        name: 'TRC_HEART_BEAT'
    })
}, 1000)

process.on('message', msg => {
    if (msg.name === 'TRC_RUN_CODE') {
        let code = msg.code
        let context = strval(msg.context)
        let contextObj = typeof context === 'string' ? {context} : context
        contextObj.sendMsg = process.send
        vm.createContext(contextObj)
        try {
            vm.runInContext(code, contextObj)
            process.send({
                name: 'TRC_RUN_SUCCESS'
            })
        } catch (e) {
            process.send({
                name: 'TRC_RUN_FAIL',
                data: e.message
            })
        }
        process.send({
            name: 'TRC_UPDATE_TIME'
        })
    }
})
