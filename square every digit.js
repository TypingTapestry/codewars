function squareDigits(num) {
    let str = num.toString();
    let output = [];
    for (let i = 0; i < str.length; i++) {
      output[i] = str[i] * str[i];
    } return Number(output.join(''));
}