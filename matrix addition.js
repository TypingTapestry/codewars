function matrixAddition(a, b) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
      arr[i] = [];
      for (let x = 0; x < a[i].length; x++) arr[i][x] = a[i][x] + b[i][x];
    } return arr;
}