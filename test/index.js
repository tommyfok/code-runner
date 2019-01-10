const Runner = require('../index.js')

let container = Runner.getContainer({
    count: 2
})

// run is an async function
for (let i = 0; i < 15; i++) {
    setTimeout(() => {
        container.run({
            code: `
let p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('一点五秒之后result的值就是我')
    }, 1500)
})
let result = await p
// return {text:'其实我也不知道为什么'}
`,
            context: {
                myData: i
            }
        }).then(res1111 => {
            console.log('res1111 result:', res1111)
        }).catch(e => {
            console.log('res1111 error:', e)
        })
        container.run({
            code: `console.log(2)`,
            context: {
                myData: i
            }
        }).then(res2222 => {
            console.log('res2222 result:', res2222)
        }).catch(e => {
            console.log('res2222 error:', e)
        })
    }, (i + 1) * 1000)
}

container.run({
    code: 'var i = 0;while(true){i++};return "you are dead process"'
}).then(res3333 => {
    console.log({
        res3333
    })
}).catch(e => {
    console.log('res3333', e)
})
