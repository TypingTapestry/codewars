function primeFactors(n) {
    let res = '';
    for (let i = 2; i <= n; i++) {
      let count = 0;
      while (n % i === 0) {
        count++;
        n /= i;
      }
      if (count) {
        res += `(${i}`;
        if (count > 1) res += `**${count}`;
        res += ')';
      }
    } if (n > 1) res += `(${n})`;
    return res;
}