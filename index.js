const getKoaListeners = require('./lib/listener/koa')
const getContainerCluster = require('./lib/cluster').getContainerCluster

module.exports = {
    getKoaListeners,
    get: getContainerCluster
}
