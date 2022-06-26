function triangleType(a, b, c) {
    [a, b, c] = [a, b, c].sort((a, b) => a - b);
    if ((a + b) <= c) return 0;
    if ((a * a) + (b * b) > (c * c)) return 1;
    if ((a * a) + (b * b) === (c * c)) return 2;
    if ((a * a) + (b * b) < (c * c)) return 3;
}