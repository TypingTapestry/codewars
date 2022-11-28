function oneTwoThree(n) {
    let x = '';
    let y = '';
    if (!n) return ['0', '0'];
    for (let i = 0; i < n; i++) y += '1';
    while (n > 9) {
      x += '9';
      n -= 9;
    } if (n !== 0) x += n;
    return [x, y];
}