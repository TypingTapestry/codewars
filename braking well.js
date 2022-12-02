function dist(v, mu) {
    v *= 10 / 36;
    return v ** 2 / (mu * 2 * 9.81) + v;
}
  
function speed(d, mu) {
    return (-1 + Math.sqrt(1 + 2 * d / mu / 9.81)) * mu * 3.6 * 9.81;
}