function digPow(n, p) {
    let str = String(n);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Math.pow(str[i], p + i);
    }
    if (sum % n === 0) {
      return sum / n;
    } return -1;
}