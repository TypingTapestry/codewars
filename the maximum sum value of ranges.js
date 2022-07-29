function maxSum(arr, range) {
    let max = -Number.MAX_VALUE;
    for (let i = 0; i < range.length; i++) {
      let sum = 0;
      for (let x = range[i][0]; x <= range[i][1]; x++) sum += arr[x];
      if (max < sum) max = sum;
    } return max;
}