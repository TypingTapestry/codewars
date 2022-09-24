function solve(arr) {
    let obj = {};
    for (let num of arr) obj[num] === undefined ? obj[num] = 1 : obj[num] += 1;
    return arr.slice().sort((a, b) => obj[b] - obj[a] || a - b);
}