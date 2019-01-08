# 代码执行器

## usage

```javascript
const Runner = require('code-runner')
let container = Runner.getContainer({
    max: 50 // 最大50个进程，自动调度
})

// 一些往执行环境传入的数据，会作为全局变量，这个会stringify之后才传到子进程中去
let contextData = {
    myData: 1,
    qs: ctx.request.query,
    body: ctx.request.body
}

/* let commonListeners = Runner.commonListeners() // 进程事件监听器，这个不用手动写进去了，默认要有 */
let koaListeners = Runner.getKoaListeners(ctx) // 需要传入koa的ctx

// 可以自定义事件监听器
let customListeners = {
// 自定义名字为myEvent的事件监听器
    myEvent (e) {
        console.log('ok my event is emitted', e.data)
    }
}

// run is an async function
container.run({
    code: 'your code',
    contextData,
    listeners: {
        ...koaListeners,
        ...customListeners
    }
})
```
