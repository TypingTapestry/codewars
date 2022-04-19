function accum(s) {
    return s.split('').map((x, y) => x.toUpperCase() + x.toLowerCase().repeat(y)).join('-');
}