String.prototype.toJadenCase = function() {
    let x = '';
    x += this[0].toUpperCase();
    for (let i = 1; i < this.length; i++) {
      if (this.charAt(i) === ' ') {
        x += (this[i] + this[i + 1].toUpperCase());
        i++;
      } else x += this[i];
    } return x;
}