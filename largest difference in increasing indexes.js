let largestDifference = function(data) {
    let diff = 0;
    for (let i = 0; i < data.length; i++) {
      for (let x = 0; x < data.length; x++) {
        if (data[i] <= data[x]) diff = Math.max(diff, x - i);
      }
    } return diff;
}