function sortArray(arr) {
    let odd = [];
    let even = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2) odd.push(arr[i]);
      else even.push(arr[i]);
    }
    odd.sort((a, b) => a - b);
    even.sort((a, b) => b - a);
    return arr.map(x => x % 2 ? odd.shift() : even.shift());
}