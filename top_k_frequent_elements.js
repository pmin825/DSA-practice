const topKFrequent = (nums, k) => {
    const count = {};
    for (const num of nums) {
        count[num] = count[num] + 1 || 1;
    }

    const sorted = Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k);
    const results = [];
    for (const value of sorted) {
        results.push(value[0]);
    }

    return results;
};
