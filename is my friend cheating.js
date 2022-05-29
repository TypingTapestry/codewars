function removeNb(n) {
    let sum = n * (n + 1) / 2;
    let result = [];
    for (let i = 1; i <= n; i++) {
      let x = (sum - i) / (i + 1);
      if (x <= n && x % 1 === 0) result.push([i, x]);
    } return result;
}