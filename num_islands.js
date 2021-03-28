var numIslands = function (grid) {
    let total = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                countIsland(grid, i, j);
                total += 1;
            }
        }
    }
    return total;
};

var countIsland = function (grid, i, j) {
    if (
        i < 0 ||
        j < 0 ||
        i >= grid.length ||
        j >= grid[0].length ||
        grid[i][j] !== "1"
    ) {
        return;
    }
    grid[i][j] = "0";
    countIsland(grid, i - 1, j);
    countIsland(grid, i + 1, j);
    countIsland(grid, i, j - 1);
    countIsland(grid, i, j + 1);
};
