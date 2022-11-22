Array.prototype.filter = function (fn, arg) {
    let arr = [];
    let length = this.length;
    for (let i = 0; i < length; i++) {
      let res = fn.call(arg, this[i], i, this);
      if (res && i in this) arr.push(this[i]);
    } return arr;
}