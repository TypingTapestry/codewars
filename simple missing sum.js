function solve(arr) {
    let sum = 0;
    arr = arr.sort((a, b) => a - b);
    if (arr[0] > 1) return 1;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i + 1] > sum + 1) return sum + 1;
    } return sum + 1;
}