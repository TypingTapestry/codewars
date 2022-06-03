function going(n) {
    let acc = 1;
    let result = 1;
    for (let i = 0; i < (n - 1); i++) {
      acc = acc / (n - i);
      result = result + acc;
    } return Math.floor(result * 1000000) / 1000000;
}