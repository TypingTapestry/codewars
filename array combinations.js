function solve(arr) {
    return arr.reduce((acc, cur) => new Set(cur).size * acc, 1);
}