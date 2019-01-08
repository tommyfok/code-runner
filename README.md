# 代码执行器

## usage

```javascript
const Runner = require('code-runner')
let containers = Runner.createContainers({
    max: 50 // 最大50个进程，自动调度
})
let contextData = {a: 2} // 一些往执行环境传入的数据，会作为全局变量，这个会stringify之后才传到子进程中去
/* let commonListeners = Runner.commonListeners() // 进程事件监听器，这个不用手动写进去了，默认要有 */
let koaListeners = Runner.koaListeners(ctx) // 需要传入koa的ctx
let customListeners = {}
// 自定义名字为myEvent的事件监听器
customListeners.myEvent = function (e) {
    console.log('ok my event is emitted')
}
// run is an async function
containers.run({
    code: 'your code',
    contextData,
    listeners: {
        ...koaListeners,
        ...customListeners
    }
})
```
