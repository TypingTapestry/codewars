function takeWhile(arr, pred) {
    for (let i = 0; i < arr.length; i++) if (!pred(arr[i])) return arr.slice(0, i);
    return arr;
}