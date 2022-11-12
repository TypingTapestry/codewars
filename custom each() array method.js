Array.prototype.each = function(callback) {
    for (let i = 0; i < this.length && !callback(this[i], i); i++);
}