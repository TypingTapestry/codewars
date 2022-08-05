function generateDiagonal(n, l) {
    let arr = [];
    for (let i = 1; i < l; i++) {
      arr[0] = 1;
      arr.push(arr[i - 1] * (i + n) / i);
    } return arr;
}