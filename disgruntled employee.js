function off(n) {
    let arr = [];
    let count = 1;
    for (let i = 1; i <= n; i += count) {
      arr.push(i);
      count += 2;
    } return arr;
}