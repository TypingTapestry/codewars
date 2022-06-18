function thirt(n) {
    let arr = [1, 10, 9, 12, 3, 4];
    let sum = 0;
    while (n !== sum) {
      sum = n;
      n = n.toString().split('').reverse().reduce((acc, cur, i) => acc + cur * arr[i % arr.length], 0);
    } return n;
}