function assembleString(array) {
    if (!array.length) return '';
    let arr = [...array[0]];
    for (let i = 1; i < array.length; i++) for (let x = 0; x < array[i].length; x++) if (array[i][x] !== '*') arr[x] = array[i][x];
    return arr.join('').replace(/\*/g, '#');
}