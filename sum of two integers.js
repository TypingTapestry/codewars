function add(x, y) {
    while (true) {
      let sum = x ^ y;
      let carry = (x & y) << 1;
      x = sum;
      y = carry;
      if (y === 0) return x;
    }
}