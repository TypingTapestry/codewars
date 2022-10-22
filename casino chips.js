function solve(arr) {
    let sum = 0;
    arr.sort((a, b) => a - b);
    while (arr[0] !== 0) {
      sum++;
      arr[0]--;
      arr[2]--;
      arr.sort((a, b) => a - b);
    } return sum + arr[1];
}