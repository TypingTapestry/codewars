function number9(n) {
    let num = 0;
    let i = 1;
    while (i <= n) {
      let int = Math.floor(n / i);
      if (int % 10 === 9) num += n % i + 1;
      num += Math.floor(int / 10) * i;
      i *= 10;
    } return num;
}