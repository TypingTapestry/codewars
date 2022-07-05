function greatestProduct(input) {
    let arr = [];
    for (let i = 0; i < input.length - 4; i++) arr.push(input[i] * input[i + 1] * input[i + 2] * input[i + 3] * input[i + 4]);
    return Math.max.apply(null, arr);
}