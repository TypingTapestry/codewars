function findNumber(array) {
    let arr = array.reduce((acc, cur, i) => [acc[0] + cur, acc[1] + i], [0, 1 + array.length * 2]);
    return arr[1] - arr[0];
}