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
