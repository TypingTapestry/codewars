function total(arr) {
    let sum = 0;
    for (let i = 2; i < arr.length; i++) {
      sum += arr[i];
      for (let x = i * 2; x < arr.length; x += i) arr[x] = 0;
    } return sum;
}