function Xbonacci(signature, n) {
    let arr = signature.slice(0, n);
    let len = signature.length;
    for (let i = len; i < n; i++) {
      arr[i] = 0;
      for (let x = 1; x <= len; x++) arr[i] += arr[i - x];
    } return arr;
}