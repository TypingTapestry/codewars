var isSquare = function(n) {
    for (let i = 0; i <= n; i++) {
      if (n === 0) {
        return true;
      } else if (n / i === i) {
        return true;
      }
    } return false;
}