process.on('message', async ({
    name,
    data
}) => {
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
