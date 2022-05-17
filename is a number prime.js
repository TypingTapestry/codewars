function isPrime(num) {
    let squareRoot = Math.sqrt(num);
    if (num < 2) return false;
    for (let i = 2; i <= squareRoot; i++) {
      if (num % i === 0) {
        return false;
      }
    } return true;
}