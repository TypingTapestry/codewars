function cornerCircle(r) {
    let x = Math.sqrt(r ** 2 * 2);
    let y = x - r;
    let ratio = r / y;
    return Number((y / ratio).toFixed(2));
}