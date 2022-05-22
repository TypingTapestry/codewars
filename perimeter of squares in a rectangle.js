function perimeter(n) {
    let arr = [0, 1];
    for (let i = 0; i < n; i++) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    } return arr.reduce((a, b) => a + b) * 4;
}