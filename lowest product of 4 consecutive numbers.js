function lowestProduct(input) {
    let arr = [];
    let num = input.split('');
    if (input.length < 4) return 'Number is too small';
    for (let i = 0; i < num.length; i++) arr.push(num[i] * num[i + 1] * num[i + 2] * num[i + 3]);
    return arr.sort((a, b) => a - b)[0];
}