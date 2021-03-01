const missingNumber = (nums) => {
    const values = new Array(nums.length).fill(false);
    for (const num of nums) {
        values[num] = true;
    }

    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        if (value === false) return i;
    }
    return nums.length;
};

// 0(n) time O(1) space
const missingNumber = (nums) => {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += i + 1 - nums[i];
    }

    return sum;
};
