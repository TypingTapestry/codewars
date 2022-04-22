function isTriangle(a, b, c) {
    let side = [a, b, c].sort();
    return (side[0] + side[1] > side[2]);
}