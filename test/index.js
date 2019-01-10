const Runner = require('../index.js')

let runner = Runner.get({
    count: 2
})

// run is an async function
for (let i = 0; i < 15; i++) {
    setTimeout(() => {
        runner.run({
            code: `
let p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('一点五秒之后result的值就是我')
    }, 1500)
})
let result = await p
return 'cloud function 1 run successfully'
`,
            context: {
                myData: i
            }
        }).then(res => {
            console.log(`expectd result is "cloud function 1 run successfully", while the actrual result is "${res.data}"`)
        })

        runner.run({
            code: `you are wrong`
        }).catch(e => {
            console.log('预计输出"Unexpected identifier"错误，实际输出：', e)
        })
    }, (i + 1) * 1000)
}

runner.run({
    code: 'var i = 0;while(true){i++}'
}).catch(e => {
    console.log('cloud function must fail with dead process', e)
})
