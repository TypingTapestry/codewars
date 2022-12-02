Array.prototype.reduce = function (process, initial) {
    for (let i = 0; i < this.length; i++) {
      if (initial !== undefined) initial = process(initial, this[i]);
      else initial = this[0];
    } return initial;
}