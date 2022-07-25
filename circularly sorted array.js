function isCircleSorted(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) if (arr[i] > arr[(i + 1) % arr.length]) count += 1;
    return count <= 1;
}