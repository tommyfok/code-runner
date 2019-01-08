module.exports = (pm) => {
    return {
        TRC_UPDATE_TIME(data, cp) {
            cp.lastActiveTimestamp = Date.now()
        },
        TRC_RUN_SUCCESS(data, cp) {
            cp._resolve && cp._resolve(data)
            delete cp._resolve
        },
        TRC_RUN_FAIL(data, cp) {
            cp._reject && cp._reject(data)
            delete cp._reject
        },
        TRC_HEART_BEAT (data, cp) {
            cp.lastHeartBeatTime = Date.now()
        }
    }
}
