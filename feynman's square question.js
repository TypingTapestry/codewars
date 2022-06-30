function countSquares(n) {
    let num = 0;
    for (let i = 0; i <= n; i++) num += i * i;
    return num;
}