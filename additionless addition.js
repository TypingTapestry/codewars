function add(x, y) {
    let a = x ^ y;
    let b = (x & y) << 1;
    if (y) return add(a, b);
    else return x;
}