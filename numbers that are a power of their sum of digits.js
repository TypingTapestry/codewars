function powerSumDigTerm(n) {
    let arr = [1];
    for (let i = 6; i < 96; i++) {
      for (let x = 2; x < 10; x++) {
        if (Math.pow(i, x).toString().split('').reduce((a, b) => a++ + b++) === i) arr.push(Math.pow(i, x));
      }
    } arr.sort((a, b) => a - b);
    return arr[n];
}