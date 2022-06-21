String.prototype.camelCase = function () {
    let arr = this.split(' ');
    arr = arr.map(function (el) {
      return el.charAt(0).toUpperCase() + el.substr(1);
    })
    return arr.join('');
}