function zeroPlentiful(arr) {
    let count = 0;
    let total = 0;
    for (let i = 0; i < arr.length + 1; i++) {
      if (arr[i] === 0) count++;
      else if (count > 0 && count < 4) return 0;
      else if (count > 3) {
        count = 0;
        total++;
      }
    } return total;
}