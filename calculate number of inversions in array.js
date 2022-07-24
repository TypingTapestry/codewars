function countInversions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) for (let x = i + 1; x < arr.length; x++) count += arr[i] > arr[x];
    return count;
}