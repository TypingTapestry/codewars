function fibonacci(max) {
    let arr = [1, 1];
    let sum = 0;
    while (arr[1] < max) {
      arr = [arr[1], arr[0] + arr[1]];
      if (arr[0] % 2 === 0) sum += arr[0];
    } return sum;
}