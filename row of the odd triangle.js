function oddRow(n) {
    let arr = [];
    let odd = n * n + n - 1;
    for (let i = odd; arr.length !== n; i -= 2) arr.push(i);
    return arr.reverse();
}