const path = require('path')
const CodeFactory = require('../index')

let factory = new CodeFactory({
    scriptPath: path.join(__dirname, './code-wrapper.js'),
    maxProcessCount: 2,
    onCodeResult (data) {
        console.log(data)
    },
    onLog: console.log
})

factory.runCode({
    code: 'console.log("data is :" + JSON.stringify(data));return 123;',
    data: 'wodingnigefei'
})

factory.runCode({
    code: 'console.log("another data is :" + JSON.stringify(data));return 123;',
    data: 'wodingnigefei'
})
