function riverSizes(matrix) {
  const sizes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        console.log("hello");
        sizes.push(findSize(matrix, i, j, []));
      }
    }
  }
  return sizes;
}

function findSize(matrix, i, j, count) {
  if (
    i < 0 ||
    j < 0 ||
    i >= matrix.length ||
    j >= matrix[0].length ||
    matrix[i][j] !== 1
  ) {
    return;
  }

  matrix[i][j] = 0;
  count.push(1);
  findSize(matrix, i - 1, j, count);
  findSize(matrix, i + 1, j, count);
  findSize(matrix, i, j - 1, count);
  findSize(matrix, i, j + 1, count);
  return count.length;
}
