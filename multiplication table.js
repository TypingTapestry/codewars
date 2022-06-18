multiplicationTable = function(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr[i] = [];
      for (let x = 0; x < size; x++) {
        arr[i][x] = (i + 1) * (x + 1);
      }
    } return arr;
}