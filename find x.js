function findX(n) {
    let x = 0;
    for (let i = 0; i < n * 2; i++) {
      if (i < n) x += i * i + i;
      x += i ** 2;
    } return x;
}