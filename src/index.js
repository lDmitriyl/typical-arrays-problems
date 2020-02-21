
exports.min = function min (array) {
    return array.sort((a,b) => a - b)[0];
}

exports.max = function max (array) {
    return array.sort((a,b) => b - a)[0];
}

exports.avg = function avg (array) {
    let res = array.reduce((sum,item) => sum+item,0);
    return res / array.length;
}
