const islandPerimeter = (grid) => {
    let total = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                total += countEdges(grid, i, j);
            }
        }
    }
    return total;
};

const countEdges = (grid, i, j) => {
    let count = 4;

    if (i > 0 && grid[i - 1][j] === 1) {
        count--;
    }

    if (i < grid.length - 1 && grid[i + 1][j] === 1) {
        count--;
    }

    if (j > 0 && grid[i][j - 1] && grid[i][j - 1] === 1) {
        count--;
    }

    if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
        count--;
    }
    return count;
};
