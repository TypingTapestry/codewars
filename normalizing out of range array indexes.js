function normIndex(array, index) {
    let len = array.length;
    if (len === 0) return array[0];
    while (index < 0) index += len;
    while (len <= index) index -= len;
    return array[index];
}