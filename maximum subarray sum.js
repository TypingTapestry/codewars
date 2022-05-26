let maxSequence = function(arr) {
    let sum = 0;
    let min = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      min = Math.min(sum, min);
      result = Math.max(result, sum - min);
    } return result;
}