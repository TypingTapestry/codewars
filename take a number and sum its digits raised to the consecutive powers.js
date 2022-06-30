function sumDigPow(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
      let sum = 0;
      let string = i.toString();
      for (let x = 0; x <= string.length; x++) {
        sum += Math.pow(parseInt(string[x]), x + 1);
        if (sum === i) arr.push(i);
      }
    } return arr;
}