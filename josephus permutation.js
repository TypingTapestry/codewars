function josephus(a, b) {
    let arr = [];
    let pos = 0;
    while (a.length > 0) {
      pos = (pos + b - 1) % a.length;
      arr = arr.concat(a.splice(pos, 1));
    } return arr;
}