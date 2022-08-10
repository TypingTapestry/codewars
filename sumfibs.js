function sumFibs(n) {
    let arr = [1, 1];
    let sum = 0;
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
      if (arr[i] % 2 === 0) sum += arr[i];
    } return sum;
}