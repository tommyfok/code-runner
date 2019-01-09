const Runner = require('../index.js')

let container = Runner.getContainer({
    count: 2
})

// run is an async function
for (let i = 0; i < 15; i++) {
    setTimeout(() => {
        container.run({
            code: `console.log(myData)`,
            context: {
                myData: i
            }
        }).then(res1111 => {
            console.log({res1111})
        }).catch(e => {
            console.log('res1111', e)
        })
        container.run({
            code: `console.log(2)`,
            context: {
                myData: i
            }
        }).then(res2222 => {
            console.log({res2222})
        }).catch(e => {
            console.log('res2222', e)
        })
    }, (i + 1) * 1000)
}

container.run({
    code: 'var i = 0;while(true){i++}'
}).then(res3333 => {
    console.log({
        res3333
    })
}).catch(e => {
    console.log('res3333', e)
})