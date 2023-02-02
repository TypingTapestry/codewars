function matrixMultiplication(a, b) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
      arr[i] = [];
      for (let x = 0; x < b[0].length; x++) {
        let sum = 0;
        for (let y = 0; y < a[0].length; y++) sum += a[i][y] * b[y][x];
        arr[i][x] = sum;
      }
    } return arr;
}