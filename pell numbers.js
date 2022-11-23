function pell(n) {
    let arr = [0n, 1n];
    for (let i = 2n; i <= n; i++) arr.push(2n * arr[i - 1n] + arr[i - 2n]);
    return arr[n];
}