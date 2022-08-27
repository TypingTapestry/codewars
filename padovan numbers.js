function padovan(n) {
    let arr = [1, 1, 1];
    for (let i = 3; i <= n; i++) arr[i] = arr[i - 2] + arr[i - 3];
    return arr[n];
}