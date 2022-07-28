function PrimeFactorizer(n) {
    let i = 2;
    let x = 0;
    this.factor = {};
    while (n >= i) {
      if (n % i === 0) {
        n /= i;
        this.factor[i] = ++x;
      } else {
        i++;
        x = 0;
      }
    }
}