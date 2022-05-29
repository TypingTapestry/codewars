let lastDigit = function(str1, str2) {
    if (Number(str2) === 0) return 1;
    let a = Number(str1.slice(-1)) % 10;
    let b = Number(str2.slice(-2)) % 4;
    if (b === 0) {
      b = 4;
    } return Math.pow(a, b) % 10;
}