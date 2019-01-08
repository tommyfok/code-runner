const getKoaListeners = require('./lib/listener/koa')
const getContainer = require('./lib/cluster').getContainerCluster

module.exports = {
    getKoaListeners,
    getContainer
}
