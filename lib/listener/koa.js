module.exports = ctx => {
    return {
        KOA_SET_RESPONSE (msg) {
            ctx.body = msg.body
            ctx.status = msg.status
        }
    }
}
