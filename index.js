const getKoaListeners = require('./libs/listener/koa')
const getContainer = require('./libs/cluster').getContainerCluster

module.exports = {
    getKoaListeners,
    getContainer
}
