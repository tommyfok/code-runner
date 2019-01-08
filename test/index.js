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
        })
        container.run({
            code: `console.log(2)`,
            context: {
                myData: i
            }
        })
    }, (i + 1) * 1000)
}

container.run({
    code: 'var i = 0;while(true){i++}'
})
