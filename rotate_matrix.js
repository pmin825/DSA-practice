// Given a two-dimensional square matrix (n x n), rotate the matrix 90 degrees to the right (clockwise).

// let matrix =
// [
//   [ 1,  2,  3, 4],
//   [ 5,  6,  7, 8],
//   [ 9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]

// Output:
// [
//  [13,  9, 5, 1],
//  [14, 10, 6, 2],
//  [15, 11, 7, 3],
//  [16, 12, 8, 4]
// ]

function rotateMatrix(matrix) {
  let length = matrix.length;

  for (let row = 0; row < length; row++) {
    for (let col = row; col < length; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < Math.floor(length / 2); col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[row][length - 1 - col];
      matrix[row][length - 1 - col] = temp;
    }
  }
  return matrix;
}

rotateMatrix(matrix);
