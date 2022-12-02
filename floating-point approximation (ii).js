function interp(f, l, u, n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(Math.floor(f(l + i * (u - l) / n) * 100) / 100);
    return arr;
}