function numberOfWaysToTraverseGraph(width, height) {
    const numWays = [];
    for (let i = 0; i <= height; i++) {
        let row = [];
        for (let j = 0; j <= width; j++) {
            row.push(0);
        }
        numWays.push(row);
    }

    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= width; j++) {
            if (i === 1 || j === 1) {
                numWays[i][j] = 1;
            } else {
                numWays[i][j] = numWays[i - 1][j] + numWays[i][j - 1];
            }
        }
    }
    return numWays[height][width];
}
