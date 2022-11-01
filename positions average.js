function posAverage(s) {
    let arr = s.split(', ');
    let len = arr.length;
    let sum = 0;
    for (let x = 0; x < len - 1; x++) for (let y = x + 1; y < len; y++) for (let z = 0; z < arr[0].length; z++) sum += arr[x][z] === arr[y][z];
    return 2e2 * sum / len / (len - 1) / arr[0].length;
}