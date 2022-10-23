function rotateClockwise(matrix) {
    let arr = [];
    if (matrix.length === 0) return [];
    for (let i = 0; i < matrix[0].length; i++) {
      let str = '';
      for (let x = 0; x < matrix.length; x++) str += matrix[matrix.length - x - 1][i];
      arr.push(str);
    } return arr;
}