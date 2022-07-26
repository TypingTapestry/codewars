let minDot = function(a, b) {
    let num = 0;
    var a = a.sort((a, b) => a - b);
    var b = b.sort((a, b) => b - a);
    for (let i = 0; i < a.length; i++) num += a[i] * b[i];
    return num;
}