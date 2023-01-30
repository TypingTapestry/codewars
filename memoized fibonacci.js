function fibonacci(n) {
    let obj = {};
    function fib(n) {
      if (n in obj) return obj[n];
      else if (n === 0 || n === 1) {
        obj[n] = n;
        return obj[n];
      } else {
        obj[n] = fib(n - 1) + fib(n - 2);
        return obj[n];
      }
    } return fib(n);
}