function choose(n, k) {
    let res = 1;
    if (k < 0 || k > n) return 0;
    for (let i = 0; i < k; i++) res = Math.round(res * (n - i) / (i + 1));
    return res;
}