function strongestEven(n, m) {
    for (let i = 1; n + i <= m; i *= 2) if ((n + i) % (i * 2) === 0) n += i;
    return n;
}