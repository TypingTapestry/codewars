function squareDigitsSequence(a0) {
    let arr = [a0];
    let sum = 0;
    let char = a0.toString();
    for (let i = 0; i < char.length; i++) sum += Math.pow(char[i], 2);
    while (arr.indexOf(sum) === -1) {
      arr.push(sum);
      char = arr[arr.length - 1].toString();
      sum = 0;
      for (let i = 0; i < char.length; i++) sum += Math.pow(char[i], 2);
    } return arr.length + 1;
}