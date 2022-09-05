function bonus(arr, s) {
    let min = Math.min(...arr);
    let newArr = arr.map(x => min / x);
    let sum = newArr.reduce((acc, cur) => acc + cur);
    return newArr.map(x => Math.round(s * x / sum));
}