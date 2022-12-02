function getFunction(arr) {
    for (let i = 1; i < arr.length - 1; i++) if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) return 'Non-linear sequence';
    return function (num) {
      while (arr.length <= num) arr.push(arr[arr.length - 1] + arr[arr.length - 1] - arr[arr.length - 2]);
      return arr[num];
    }
}