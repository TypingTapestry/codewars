function lenCurve(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) sum += Math.sqrt((4 * i ** 2 + 4 * i + 1 + n ** 2) / n ** 4);
    return +(sum.toFixed(9));
}