function step(g, m, n) {
    function isPrime(num) {
      if (num === 2) return true;
      if (num <= 2 || !(num % 2)) return false;
      let i = 3;
      while (i <= Math.sqrt(num)) {
        if (num % i === 0) return false;
        i++;
        i++;
      } return true;
    } while (m <= n) {
      if (isPrime(m) && isPrime(m + g)) return [m, m + g];
      m++;
    } return null;
}