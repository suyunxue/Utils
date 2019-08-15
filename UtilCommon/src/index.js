function produceRandomArrValue(arr) {
    let length = arr.length;
    let index = Math.round(Math.random() * (length - 1));
    let ret = arr[index];
    return ret;
}

module.exports = {
    produceRandomArrValue
}
