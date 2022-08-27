function diamond(n) {
    let diam = '';
    if (n < 1 || n % 2 === 0) return null;
    for (let i = 0; i < n; i++) {
      let dev = Math.abs((n - 2 * i - 1) / 2);
      diam += ' '.repeat(dev);
      diam += '*'.repeat(n - 2 * dev);
      diam += '\n';
    } return diam;
}