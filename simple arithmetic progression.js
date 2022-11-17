function solve(array) {
    let count = 0;
    let arr = array.length;
    for (let i = 0; i < arr - 2; i++) for (let x = i + 1; x < arr - 1; x++) {
      let total = 2 * array[x] - array[i];
      count += array.includes(total);
    } return count;
}