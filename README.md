# run javascript string safely in nodejs

## install
`npm i jscode-runner`

## usage

```javascript
const Runner = require('jscode-runner')
let container = Runner.get({
    count: 50 // 50个进程，自动调度
})

// 一些往执行环境传入的数据，会作为全局变量，这个会stringify之后才传到子进程中去
let contextData = {
    myData: 2,
    qs: ctx.request.query,
    body: ctx.request.body
}

// 可以自定义事件监听器
let customListeners = {
// 自定义名字为myEvent的事件监听器
    myEvent (e) {
        console.log('ok my event is emitted', e.data) // 123
    }
}

// run is an async function
container.run({
    code: 'processSend(\'myEvent\',123);return myData * 101', // 代码最外层能使用await
    context: contextData,
    listeners: {
        ...koaListeners,
        ...customListeners
    }
})
.then(res => {
    console.log(res.data) // 202
})
```
