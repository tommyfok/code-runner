const log = require('debug')('TRC_HEART_BEAT:debug')

module.exports = (ProcessContainerManager) => {
    return {
        // 活跃时间更新
        TRC_UPDATE_TIME(data, ChildProcessContainer) {
            ChildProcessContainer.lastActiveTimestamp = Date.now()
        },
        TRC_RUN_SUCCESS(data, ChildProcessContainer) {
            let {
                requestId
            } = data
            if (requestId in ChildProcessContainer.resolverMap) {
                ChildProcessContainer.resolverMap[requestId](data.res)
            }
            delete ChildProcessContainer.resolverMap[requestId]
            delete ChildProcessContainer.rejectorMap[requestId]
        },
        TRC_RUN_FAIL(data, ChildProcessContainer) {
            let {
                requestId
            } = data
            if (requestId in ChildProcessContainer.rejectorMap) {
                let err = new Error()
                Object.assign(err, data.err)
                ChildProcessContainer.rejectorMap[requestId](err)
            }
            delete ChildProcessContainer.resolverMap[requestId]
            delete ChildProcessContainer.rejectorMap[requestId]
        },
        // 心跳上报
        TRC_HEART_BEAT(data, ChildProcessContainer) {
            ChildProcessContainer.lastHeartBeatTime = Date.now()
            ChildProcessContainer.cpuUsage = data.cpuUsage
            ChildProcessContainer.memoryUsage = data.memoryUsage
            log(`PID: ${ChildProcessContainer.child_process.pid} MEMORY: ${(data.memoryUsage.rss / (1024 * 1024)).toFixed(1)}m`)
        },
        TRC_CONSOLE_LOG(data, ChildProcessContainer) {
            console.log.apply(null, ['TRC_CONSOLE_LOG'].concat(data))
        }
    }
}
