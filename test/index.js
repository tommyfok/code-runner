const path = require('path')
const CodeFactory = require('../index')

let factory = new CodeFactory({
    scriptPath: path.join(__dirname, './demo.js'),
    maxProcessCount: 2,
    onLog: console.log,
    onErr: console.error
})

factory.runCode({
    code: 'return 1'
}).then(result => {
    console.log('第1个函数的结果：', result)
}).catch(e => {
    console.log('第一个函数的错误', e)
})

factory.runCode({
    code: 'return 2'
}).then(result => {
    console.log('第2个函数的结果：', result)
}).catch(e => {
    console.log('第2个函数的错误', e)
})

factory.runCode({
    code: 'return alert(3)'
}).then(result => {
    console.log('第3个函数的结果：', result)
}).catch(e => {
    console.log('第3个函数的错误', e)
})

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
    console.log('第4个函数的结果：', result)
}).catch(e => {
    console.log('第4个函数的错误', e)
})
