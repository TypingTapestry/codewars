function atomicNumber(num) {
    let arr = [];
    let shell = 1;
    while (num > 0) {
      let formula = Math.min(2 * shell ** 2, num);
      arr.push(formula);
      num -= formula;
      shell++;
    } return arr;
}