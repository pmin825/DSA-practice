function numberOfWaysToTraverseGraph(width, height) {
    const numWays = Array.from(Array(height + 1), () => new Array(width + 1));

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
