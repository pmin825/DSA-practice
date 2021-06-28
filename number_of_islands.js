var numIslands = function (grid) {
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        islandCount++;
        traverseGrid(grid, i, j);
      }
    }
  }

  return islandCount;
};

const traverseGrid = (grid, i, j) => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
  if (grid[i][j] !== "1") return;

  grid[i][j] = "0";

  traverseGrid(grid, i - 1, j);
  traverseGrid(grid, i + 1, j);
  traverseGrid(grid, i, j - 1);
  traverseGrid(grid, i, j + 1);
};
