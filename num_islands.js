const numIslands = (grid) => {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                count += 1;
                traverseGrid(grid, i, j);
            }
        }
    }

    return count;
};

const traverseGrid = (grid, i, j) => {
    if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] !== "1"
    ) {
        return;
    }

    grid[i][j] = "0";
    traverseGrid(grid, i - 1, j);
    traverseGrid(grid, i + 1, j);
    traverseGrid(grid, i, j - 1);
    traverseGrid(grid, i, j + 1);
};
