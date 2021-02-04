const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    while (i < intervals.length) {
        let current = intervals[i];
        let next = intervals[i + 1];
        let newInt = [];

        if (next && current[1] >= next[0]) {
            newInt[0] = Math.min(current[0], next[0]);
            newInt[1] = Math.max(current[1], next[1]);
            intervals.splice(i, 2, newInt);
        } else {
            i++;
        }
    }
    return intervals;
};
