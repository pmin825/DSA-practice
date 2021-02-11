// function staircaseTraversal(height, maxSteps) {
//     let numWays = new Array(height + 1).fill(0);
//     numWays[0] = 1;
//     numWays[1] = 1;

//     for (let i = 2; i <= height; i++) {
//         let step = 1;
//         while (step <= maxSteps && step <= i) {
//             numWays[i] += numWays[i - step];
//             step += 1;
//         }
//     }
//     return numWays[height];
// }

function staircaseTraversal(height, maxSteps) {
    let count = 0;
    let numWays = [1];

    for (let i = 1; i <= height; i++) {
        let start = i - maxSteps - 1;
        let end = i - 1;

        if (start >= 0) count -= numWays[start];
        count += numWays[end];
        numWays.push(count);
    }
    return numWays[height];
}
