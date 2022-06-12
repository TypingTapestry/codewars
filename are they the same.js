function comp(array1, array2) {
    if (array1 === null || array2 === null) return false;
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    return array1.every((el, index) => el ** 2 === array2[index]);
}