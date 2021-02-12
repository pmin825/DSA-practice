const PredictTheWinner = (nums) => {
    if (nums.length % 2 == 0) return true;
    let dp = nums.slice();
    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
        }
    }
    return dp[nums.length - 1] >= 0;
};
