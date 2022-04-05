function positiveSum(arr) {
    return arr.filter(x => x >= 0).reduce((acc, c) => acc + c, 0);
}