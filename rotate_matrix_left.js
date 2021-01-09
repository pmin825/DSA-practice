function rotateMatrix(matrix) {
  let length = matrix.length;

  for (let row = 0; row < length; row++) {
    for (let col = row; col < length; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  for (let row = 0; row < Math.floor(length / 2); row++) {
    for (let col = 0; col < length; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[length - 1 - row][col];
      matrix[length - 1 - row][col] = temp;
    }
  }
  return matrix;
}
