function redarr(array) {
    let obj = {};
    let arr = array.sort().filter((el, idx) => idx === array.indexOf(el));
    for (let idx in arr) obj[idx] = arr[idx];
    return obj;
}