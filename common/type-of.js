module.exports = function (obj) {
    return Object.prototype.toString.call(obj).split(' ')[1].replace(']', '')
}
