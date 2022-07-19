let splitInteger = function(num, parts) {
    let arr = Array(parts).fill(Math.floor(num / parts));
    let sum = arr.reduce((a, b) => a + b);
    for (let i = 0; i < arr.length; i++) {
      if (num === sum) break;
      sum++;
      arr[i]++;
    } return arr;
}