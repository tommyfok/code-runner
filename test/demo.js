process.on('message', async ({name, data}) => {
    switch (name) {
        case 'RUN_CODE':
            let result
            try {
                result = await (async () => {
                    DYNAMIC_CODE
                })()
                process.send({
                    name: 'RUN_CODE_RESULT',
                    data: {
                        success: true,
                        innerRequestId: data.innerRequestId,
                        userRequestId: data.userRequestId,
                        result
                    }
                })
            } catch (e) {
                process.send({
                    name: 'RUN_CODE_RESULT',
                    data: {
                        success: false,
                        innerRequestId: data.innerRequestId,
                        userRequestId: data.userRequestId,
                        err: {
                            message: e.message,
                            stack: e.stack
                        }
                    }
                })
            }
            break
        default:
            break
    }
})

let cpu, mem
function _hb() {
    let isInit = !cpu
    cpu = process.cpuUsage(cpu)
    mem = process.memoryUsage(mem)
    process.send({
        name: 'HEARTBEAT',
        data: isInit ? {
            pid: process.pid
        } : {
            pid: process.pid,
            cpuUsage: cpu,
            memoryUsage: mem
        }
    })
    setTimeout(_hb, 1000);
}

_hb()
