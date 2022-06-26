function beggars(values, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let x = i; x < values.length; x += n) sum += values[x];
      arr.push(sum);
    } return arr;
}