let zeroFill = (number, size) => {
    number = Math.abs(~~number).toString().split('');
    while (number.length < size) number.unshift('0');
    return number.join('');
}