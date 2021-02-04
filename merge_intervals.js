// const merge = (intervals) => {
//     intervals.sort((a, b) => a[0] - b[0]);
//     let i = 0;
//     while (i < intervals.length - 1) {
//         let current = intervals[i];
//         let next = intervals[i + 1];
//         let newInt = [];

//         if (current[1] >= next[0]) {
//             newInt[0] = Math.min(current[0], next[0]);
//             newInt[1] = Math.max(current[1], next[1]);
//             intervals.splice(i, 2, newInt);
//         } else {
//             i++;
//         }
//     }
//     return intervals;
// };

const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    let results = [];
    let start = intervals[0][0];
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        let checkStart = interval[0];
        let checkEnd = interval[1];

        if (checkStart <= end) {
            if (checkEnd > end) {
                end = checkEnd;
            }
        }

        if (checkStart > end) {
            results.push([start, end]);
            start = checkStart;
            end = checkEnd;
        }

        if (i === intervals.length - 1) {
            results.push([start, end]);
        }
    }
    return results;
};
