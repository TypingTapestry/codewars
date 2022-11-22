function solve(a, b) {
    let arr = [];
    let res = [];
    let num = 50000;
    for (let i = 0; i < num; i++) arr.push(1);
    for (let i = 2; i < num; i++) if (arr[i]) for (let x = i + i; x < num; x += i) arr[x] = 0;
    for (let i = 2; i < num; i++) if (arr[i]) res.push(i);
    return res.join('').slice(a, a + b);
}