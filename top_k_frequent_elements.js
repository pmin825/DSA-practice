// O(n)
const topKFrequent = (nums, k) => {
    const count = {};
    const bucket = [];
    const result = [];

    for (const num of nums) {
        count[num] = count[num] + 1 || 1;
    }

    for (const [val, freq] of Object.entries(count)) {
        bucket[freq] = (bucket[freq] || new Set()).add(val);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i]);
        if (result.length === k) break;
    }
    return result;
};

// O(n log n)
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
