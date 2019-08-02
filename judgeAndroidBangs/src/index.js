function isBangsScreen(ua) {
    if (ua.indexOf('HUAWEICLT-AL01')) {
        return true;
    }

    return false;
}

module.exports = {
    isBangsScreen
}
