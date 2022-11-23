function countRepeats(str) {
    let arr = str.split('');
    arr = arr.filter((el, idx) => el !== arr[idx + 1]);
    return str.length - arr.length;
}