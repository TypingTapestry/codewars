function findNextSquare(sq) {
    let x = Math.sqrt(sq);
    if (x % 1 === 0) {
      return Math.pow(x + 1, 2);
    } else return -1;
}