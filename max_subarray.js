const maxSubArray = (nums) => {
    let max = -Infinity;
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        currentSum = Math.max(num, currentSum + num);
        max = Math.max(max, currentSum);
    }
    return max;
};
