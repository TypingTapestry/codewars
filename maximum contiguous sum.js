function maxContiguousSum(arr) {
    let max = 0;
    let cur = 0;
    for (let i = 0; i < arr.length; i++) {
      cur += arr[i];
      if (cur > max) max = cur;
      if (cur < 0) cur = 0;
    } return max;
}