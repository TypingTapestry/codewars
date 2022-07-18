function checkchoose(m, n) {
    for (let i = 0, x = 1; i < (n / 1 + 2); i++) {
      if (x === m) return i;
      x = x * (n - i) / (i + 1);
    } return -1;
}