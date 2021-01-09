// let matrix =
// [
//   [ 1,  2,  3, 4],
//   [ 5,  6,  7, 8],
//   [ 9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]



function rotateMatrix(matrix) {
  let length = matrix.length;

  for (let row = 0; row < Math.floor(length / 2); row++) {
    for (let col = 0; col < length; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[length - 1 - row][length - 1 - col];
      matrix[length - 1 - row][length - 1 - col] = temp;
    }
  }
  return matrix;
}

rotateMatrix(matrix);
