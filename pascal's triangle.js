function pascalsTriangle(n) {
    let arr = new Array(n * (n + 1) / 2);
    let column = 1;
    let row = 1;
    for (let i = 0, length = arr.length; i < length; i++) {
      if (column === row || column === 1) arr[i] = 1;
      else arr[i] = arr[i - row] + arr[i - row + 1];
      if (column === row) {
        column = 1;
        row++;
      } else column++;
    } return arr;
}