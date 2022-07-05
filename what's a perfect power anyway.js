let isPP = n => {
    let max = Math.floor(n / 2);
    for (let i = 2; i <= max; i++) {
      for (let pow = 2; i ** pow <= n; pow++) {
        if (i ** pow === n) return [i, pow];
      }
    } return null;
}