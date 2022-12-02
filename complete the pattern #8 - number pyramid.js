function pattern(n) {
    let arr = [];
    let output = [];
    for (let i = 1; i <= n; i++) {
      arr = [i % 10];
      for (let x = i - 1; x >= 1; x--) {
        arr.push(x % 10);
        arr.unshift(x % 10);
      }
      arr.push(' '.repeat(n - i));
      arr.unshift(' '.repeat(n - i));
      output.push(arr.join(''));
    } return output.join('\n');
}