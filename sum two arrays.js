function addArrays(array1, array2) {
    let arrayToNumber1 = Number(array1.join(''));
    let arrayToNumber2 = Number(array2.join(''));
    if (array1.length === 0) return array2;
    if (array2.length === 0) return array1;
    return (arrayToNumber1 + arrayToNumber2).toString().match(/-?\d/g).map(x => Number(x));
}