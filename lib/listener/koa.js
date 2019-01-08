module.exports = ctx => {
    return {
        KOA_SET_BODY (msg) {
            ctx.body = msg.body
            ctx.status = msg.status
        }
    }
}
