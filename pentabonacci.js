function countOddPentaFib(n) {
    let odd = 1;
    for (let i = 3; i <= n; i++) if (i % 6 === 1 || i % 6 === 2) odd++;
    return odd;
}