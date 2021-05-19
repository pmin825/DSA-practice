const removeDuplicates = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        const current = nums[i];
        const next = nums[i - 1];
        if (current === next) {
            nums.splice(i - 1, 1);
        }
    }

    return nums.length;
};
