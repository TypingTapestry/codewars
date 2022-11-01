function calculateHypotenuse(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number' && a > 0 && b > 0) return Math.round(Math.sqrt(a * a + b * b) * 1000) / 1000;
    else throw Error();
}