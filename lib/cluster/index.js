const PM = require('./process-manager')
const hash = require('../common/hash')

module.exports = {
    getContainerCluster (opts) {
        global.__TCR__ = global.__TCR__ || {}
        let key = hash(JSON.stringify(opts))
        if (!(key in global.__TCR__)) {
            global.__TCR__[key] = new PM(opts)
        }
        return global.__TCR__[key]
    }
}
