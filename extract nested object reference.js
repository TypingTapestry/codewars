Object.prototype.hash = function (string) {
    let str = string.split('.');
    let obj = this;
    for (let i = 0; obj && i < str.length; i++) obj = obj[str[i]];
    return obj;
}