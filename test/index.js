const path = require('path')
const CodeFactory = require('../index')

let factory = new CodeFactory({
    scriptPath: path.join(__dirname, './demo.js'),
    processCount: 3,
    maxProcessCount: 3,
    onLog: console.log,
    onErr: console.error
})

console.log('第1个函数开始执行', Date.now())
factory.runCode({
    code: 'return 1'
}).then(result => {
    console.log('第1个函数的结果：', result, Date.now())
}).catch(e => {
    console.log('第一个函数的错误', e, Date.now())
})

console.log('第2个函数开始执行', Date.now())
factory.runCode({
    code: 'return 2'
}).then(result => {
    console.log('第2个函数的结果：', result, Date.now())
}).catch(e => {
    console.log('第2个函数的错误', e, Date.now())
})

console.log('第3个函数开始执行', Date.now())
factory.runCode({
    code: 'return alert(3)'
}).then(result => {
    console.log('第3个函数的结果：', result, Date.now())
}).catch(e => {
    console.log('第3个函数的错误', e, Date.now())
})

console.log('第4个函数开始执行', Date.now())
factory.runCode({
    code: `
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok')
        }, 10 * 1000)
    })
    return await p
    `
}).then(result => {
    console.log('第4个函数的结果：', result, Date.now())
}).catch(e => {
    console.log('第4个函数的错误', e, Date.now())
})

setTimeout(() => {
    console.log('第5个函数开始执行', Date.now())
    factory.runCode({
        code: `
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok')
        }, 10 * 1000)
    })
    return await p
    `
    }).then(result => {
        console.log('第5个函数的结果：', result, Date.now())
    }).catch(e => {
        console.log('第5个函数的错误', e, Date.now())
    })
}, 2000)

setTimeout(() => {
    console.log('第6个函数开始执行', Date.now())
    factory.runCode({
        code: `return 1`
    }).then(result => {
        console.log('第6个函数的结果：', result, Date.now())
    }).catch(e => {
        console.log('第6个函数的错误', e, Date.now())
    })
}, 4000)
