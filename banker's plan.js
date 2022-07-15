function fortune(f0, p, c0, n, i) {
    for (let x = 0; x < n - 1; x++) {
      f0 = Math.floor(f0 + f0 * p / 100) - c0;
      c0 = Math.floor(c0 + c0 * i / 100);
      if (f0 < 0) return false;
    } return true;
}