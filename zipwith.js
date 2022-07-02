function zipWith(f, a, b) {
    let arr = [];
    let min = Math.min(a.length, b.length);
    for (let i = 0; i < min; i++) arr.push(f(a[i], b[i]));
    return arr;
}