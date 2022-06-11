let solution = function(firstArr, secondArr) {
    let arr = [];
    for (let i = 0; i < firstArr.length; i++) {
      arr.push(Math.pow(secondArr[i] - firstArr[i], 2));
    } return arr.reduce((a, b) => a + b) / arr.length;
}