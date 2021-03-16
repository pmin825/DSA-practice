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

const rotate = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < Math.floor(matrix[0].length / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[0].length - 1 - j];
            matrix[i][matrix[0].length - 1 - j] = temp;
        }
    }
};

rotateMatrix(matrix);
