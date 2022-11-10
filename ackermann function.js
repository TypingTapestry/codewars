function Ackermann(m, n) {
    if (m === 0) return n + 1;
    if (n === 0 && m > 0) return Ackermann(m - 1, 1);
    else return Ackermann(m - 1, Ackermann (m, n - 1));
}