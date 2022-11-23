function count(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) count += Math.log10(i);
    return Math.floor(count) + 1;
}