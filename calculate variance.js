let variance = numbers => {
    let mean = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
    return numbers.reduce((acc, cur) => acc + (cur - mean) ** 2, 0) / numbers.length;
}