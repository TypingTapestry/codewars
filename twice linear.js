function dblLinear(n) {
    let arr = [1];
    let i = 0;
    let x = 0;
    while (arr.length <= n) {
      let y = arr[i] * 2 + 1;
      let z = arr[x] * 3 + 1;
      if (y < z) {
        arr.push(y);
        i++;
      } else if (y > z) {
        arr.push(z);
        x++;
      } else {
        arr.push(y);
        i++;
        x++;
      }
    } return arr[n];
}