function yesNo(arr) {
    for (let i = 1; i < arr.length; i++) arr.push(...arr.splice(i, 1));
    return arr;
}