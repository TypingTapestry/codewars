function findNb(m) {
    let x = Math.floor(Math.pow(m * 4, 1 / 4));
    if (x ** 2 * (x + 1) ** 2 / 4 !== m) return -1;
    return x;
}