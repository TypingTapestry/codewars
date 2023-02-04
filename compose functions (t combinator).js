function compose(val) {
    if (arguments.length === 1) return val;
    let functions = Array.prototype.slice.call(arguments, 1);
    return functions.reduce((acc, cur) => cur(acc), val);
}