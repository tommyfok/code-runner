const PM = require('./manager')
const hash = require('../common/hash')

module.exports = {
    getContainerCluster (opts) {
        global.__CFCluster = global.__CFCluster || {}
        let key = hash(JSON.stringify(opts))
        if (!key in global.__CFCluster) {
            global.__CFCluster[key] = new PM(opts)
        }
        return global.__CFCluster[key]
    }
}
