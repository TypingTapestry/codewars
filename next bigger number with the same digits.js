function nextBigger(num) {
    num = num.toString();
    let digits = num.split('');
    let len = digits.length;
    let i = len - 1;
    while (i > 0 && digits[i - 1] >= digits[i]) i--;
    if (i === 0) return -1;
    let x = len - 1;
    while (x > i && digits[x] <= digits[i - 1]) x--;
    [digits[i - 1], digits[x]] = [digits[x], digits[i - 1]];
    let left = digits.slice(0, i);
    let right = digits.slice(i, len).reverse();
    let nextBiggerNum = Number(left.concat(right).join(''));
    return nextBiggerNum;
}