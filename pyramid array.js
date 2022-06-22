function pyramid(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr[i] = [];
      for (let x = 0; x < i + 1; x++) arr[i].push(1);
    } return arr;
}