function f(n, m) {
    let mod = n % m;
    let sum = Math.floor(n / m) * m * (m - 1) / 2;
    for (let i = 1; i <= mod; i++) sum += i;
    return sum;
}