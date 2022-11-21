function maxAndMin(arr1, arr2) {
    let min = Number.MAX_VALUE;
    let max = 0;
    for (let i = 0; i < arr1.length; i++) for (let x = 0; x < arr2.length; x++) {
      let diff = Math.abs(arr1[i] - arr2[x]);
      min = diff < min ? diff : min;
      max = diff > max ? diff : max;
    } return [max, min];
}