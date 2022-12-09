Function.prototype.pipe = function (fn) {
    return args => fn(this(args));
}