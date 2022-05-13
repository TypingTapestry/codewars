function digital_root(x) {
    if (x < 10) return x;
    for (var sum = 0, x = String(x), i = 0; i < x.length; i++) {
      sum += Number(x[i]);
    } return digital_root(sum);
}