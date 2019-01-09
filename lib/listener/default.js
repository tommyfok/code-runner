module.exports = (ProcessContainerManager) => {
    return {
        // 活跃时间更新
        TRC_UPDATE_TIME(data, ChildProcessContainer) {
            ChildProcessContainer.lastActiveTimestamp = Date.now()
        },
        TRC_RUN_SUCCESS(data, ChildProcessContainer) {
            ChildProcessContainer._resolve && ChildProcessContainer._resolve(data)
            delete ChildProcessContainer._resolve
        },
        TRC_RUN_FAIL(data, ChildProcessContainer) {
            ChildProcessContainer._reject && ChildProcessContainer._reject(data)
            delete ChildProcessContainer._reject
        },
        // 心跳上报
        TRC_HEART_BEAT (data, ChildProcessContainer) {
            ChildProcessContainer.lastHeartBeatTime = Date.now()
            ChildProcessContainer.cpuUsage = data.cpuUsage
            ChildProcessContainer.memoryUsage = data.memoryUsage
            console.log(`PID: ${ChildProcessContainer.child_process.pid} MEMORY: ${(data.memoryUsage.rss / (1024 * 1024)).toFixed(1)}m CPU: ${(data.cpuUsage.user / 10000).toFixed(1)}%`)
        }
    }
}
