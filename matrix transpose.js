function transpose(matrix) {
    return matrix[0].map(function (unusedArg, col) {
      return matrix.map(function (unusedArg, row) {
        return matrix[row][col];
      });
    });
}