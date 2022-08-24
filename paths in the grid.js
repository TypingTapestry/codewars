function numberOfRoutes(m, n) {
    let arr = [];
    for (let i = 0; i <= m; i++) {
      arr[i] = [];
      for (let x = 0; x <= n; x++) {
        if (i === 0) arr[i][x] = 1;
        else if (x === 0) arr[i][x] = 1;
        else arr[i][x] = arr[i - 1][x] + arr[i][x - 1];
      }
    } return arr[m][n];
}