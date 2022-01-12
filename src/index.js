module.exports = function reverse (n) {

    return  Number(String(n).split('').reverse().join('').replace(/[^0-9.,]/g,""));
}


