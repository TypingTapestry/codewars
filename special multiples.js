function countSpecMult(n, mxval) {
    let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    let limit = 1;
    for (let i = 0; i < n; i++) limit *= arr[i];
    return Math.floor(mxval / limit);
}