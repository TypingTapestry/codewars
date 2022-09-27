function hasTwoCubeSums(n) {
    let arr = [];
    for (let i = 1; i <= Math.cbrt(n); i++) for (let x = i; x <= Math.cbrt(n); x++) if (i ** 3 + x ** 3 === n) arr.push(i, x);
    return [...new Set(arr)].length > 2;
}