function rotate(array, n) {
    let arr = array.slice(0);
    for (let i = 0; i < Math.abs(n); i++) if (n < 0) arr.push(arr.shift());
    else arr.unshift(arr.pop());
    return arr;
}