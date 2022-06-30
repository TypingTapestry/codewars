function diagonal(n, p) {
    let sum = n + 1;
    for (let i = 1; i <= p; i++) sum *= (n - i + 1) / (i + 1);
    return Math.round(sum);
}