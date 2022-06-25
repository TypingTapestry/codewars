function upArray(arr) {
    if (arr.length === 0 || arr.some(val => val < 0 || val > 9)) return null;
    let i = arr.length - 1;
    while (arr[i] === 9 && i >= 0) arr[i--] = 0;
    if (i < 0) arr.unshift(1);
    else arr[i]++;
    return arr;
}