// function numberOfWaysToTraverseGraph(width, height) {
//     if (width === 1 || height === 1) return 1;

//     return (
//         numberOfWaysToTraverseGraph(width - 1, height) +
//         numberOfWaysToTraverseGraph(width, height - 1)
//     );
// }

function numberOfWaysToTraverseGraph(width, height) {
    const numWays = [];
    for (let i = 0; i < height + 1; i++) {
        numWays.push([]);
        for (let j = 0; j < width + 1; j++) {
            numWays[i].push(0);
        }
    }

    for (let i = 1; i < width + 1; i++) {
        for (let j = 1; j < height + 1; j++) {
            if (i === 1 || j === 1) {
                numWays[j][i] = 1;
            } else {
                const waysLeft = numWays[j][i - 1];
                const waysUp = numWays[j - 1][i];
                numWays[j][i] = waysLeft + waysUp;
            }
        }
    }
    return numWays[height][width];
}
