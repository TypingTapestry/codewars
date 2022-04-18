function highAndLow(numbers) {
    let arr = numbers.split(' ');
    let min = Math.min.apply(0, arr);
    let max = Math.max.apply(0, arr);
    return max + ' ' + min;
}