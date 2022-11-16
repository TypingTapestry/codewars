let isPrime = n => {
    for (let i = 2; i ** 2 <= n; i++) if (n % i === 0) return 0;
    return n >= 2;
}
  
let solve = n => {
    let i = 0;
    while (true) {
      if (isPrime(n - i)) return n - i;
      if (isPrime(n + i)) return n + i;
      i++;
    }
}