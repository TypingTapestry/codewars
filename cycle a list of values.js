function cycle(dir, arr, cur) {
    if (!arr.includes(cur)) return null;
    if (arr.indexOf(cur) + dir >= arr.length) return arr[0];
    if (arr.indexOf(cur) + dir < 0) return arr[arr.length - 1];
    return arr[arr.indexOf(cur) + dir];
}