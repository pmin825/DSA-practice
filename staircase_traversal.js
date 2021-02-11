function staircaseTraversal(height, maxSteps) {
    let numWays = new Array(height + 1).fill(0);
    numWays[0] = 1;
    numWays[1] = 1;

    for (let i = 2; i <= height; i++) {
        let step = 1;
        while (step <= maxSteps && step <= i) {
            numWays[i] += numWays[i - step];
            step += 1;
        }
    }
    return numWays[height];
}
