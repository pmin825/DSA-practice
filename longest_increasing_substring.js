const lengthOfLIS = (nums) => {
  var n = nums.length;
  if (!n) return 0;
  let len = 1;
  const dp = [nums[0]];
  for (let i = 1; i < n; i++) {
    if (dp[len - 1] < nums[i]) {
      dp[len++] = nums[i];
    } else {
      let left = 0,
        right = len - 1,
        num = nums[i];
      while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (dp[mid] < num) left = mid + 1;
        else right = mid;
      }
      dp[right] = num;
    }
  }
  return len;
};
