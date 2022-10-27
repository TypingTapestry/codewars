let splitAndAdd = (arr, n) => {
    arr = arr.slice();
    if (arr.length === 1 || n < 1) return arr;
    if (arr.length % 2) arr.unshift(0);
    return splitAndAdd(arr.splice(0, Math.ceil(arr.length / 2)).map((x, i) => x + arr[i]), n - 1);
}