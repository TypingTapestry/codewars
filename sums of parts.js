function partsSums(ls) {
    let arr = [];
    arr.push(ls.reduce((acc, cur) => acc + cur, 0));
    for (let i = 0; i < ls.length; i++) arr.push(arr[arr.length - 1] - ls[i]);
    return arr;
}