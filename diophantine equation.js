function solequa(n) {
    let result = [];
    for (let i = 1; (i ** 2) <= n; i++) {
      if (n % i) continue;
      let x = n / i;
      if ((x - i) % 4) continue;
      result.push([(x + i) / 2, (x - i) / 4]);
    } return result;
}