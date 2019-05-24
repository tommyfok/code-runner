const path = require('path')
const CodeFactory = require('../index')

let factory = new CodeFactory({
    scriptPath: path.join(__dirname, './demo.js'),
    maxProcessCount: 5,
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
