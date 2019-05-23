module.exports = function (str) {
    if (typeof str !== 'string') {
        return str
    }

    var result;

    try {
        result = JSON.parse(str)
    } catch (e) {}

    if (!result) {
        try {
            eval('result=' + str)
        } catch (e) {}
    }

    return result
}
