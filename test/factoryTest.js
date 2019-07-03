const assert = require('assert')
const path = require('path')
const Factory = require('../factory')

describe('创建工厂实例', function () {
  it('不传入参数会报错', function (done) {
    try {
      new Factory()
      done('有问题，不传入参数竟然不报错')
    } catch (e) {
      done()
    }
  })

  it('传入空对象会报错', function (done) {
    try {
      new Factory({})
      done('有问题，传入空对象竟然不报错')
    } catch (e) {
      done()
    }
  })

  it('执行代码', async function () {
    let factory = new Factory({
      onLog: console.log,
      processCount: 1,
      maxProcessCount: 10,
      scriptPath: path.join(__dirname, '../demo/demo.js')
    })
    let response = await factory.runCode({
      code: 'return "456"'
    })
    assert.ok(response.result === '456')
  })

  it('执行超时代码', function (done) {
    this.timeout(65 * 1000)
    let factory = new Factory({
      onLog: console.log,
      processCount: 1,
      maxProcessCount: 10,
      scriptPath: path.join(__dirname, '../demo/demo.js')
    })
    factory.runCode({
      code: `=it must be a bad code`
    }).then(() => {
      done(new Error('跑进success的回调了，这貌似是不正确的'))
    }).catch(() => {
      done()
    })
  })

  it('执行错误代码', function (done) {
    let factory = new Factory({
      onLog: console.log,
      processCount: 1,
      maxProcessCount: 10,
      scriptPath: path.join(__dirname, '../demo/demo.js')
    })
    factory.runCode({
      code: `var a;return a.b`
    }).then(() => {
      done(new Error('跑进success的回调了，这貌似是不正确的'))
    }).catch(() => {
      done()
    })
  })
})
