const Runner = require('../index')
let container = Runner.getContainer({
    count: 1
})

let contextData = {
    myData: 123
}

// run is an async function
container.run({
    code: 'console.log(myData)',
    context: contextData
})
