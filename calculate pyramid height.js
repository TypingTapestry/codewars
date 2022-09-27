function pyramidHeight(n) {
    let count = 0;
    while (true) {
      n -= count ** 2;
      if (n === 0) return count;
      if (n < 0) return count - 1;
      else count++;
    }
}