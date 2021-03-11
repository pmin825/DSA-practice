const surfaceArea = (grid) => {
  let area = 0;

  for (let i in grid) {
    for (let j in grid) {
      if (grid[i][j]) {
        area += grid[i][j] * 4 + 2;
        if (i > 0) area -= 2 * Math.min(grid[i][j], grid[i - 1][j]);
        if (j > 0) area -= 2 * Math.min(grid[i][j], grid[i][j - 1]);
      }
    }
  }

  return area;
};
