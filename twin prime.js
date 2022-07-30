let isTwinPrime = n => isPrime(n) && (isPrime(n - 2) || isPrime(n + 2));

let isPrime = n => {
    for (let i = 2; i < n; i++) if (n % i === 0) return false;
    return n > 1;
}