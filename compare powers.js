function comparePowers(n1, n2) {
    let ln = ([a, b]) => b * Math.log(a);
    return Math.sign(ln(n2) - ln(n1));
}