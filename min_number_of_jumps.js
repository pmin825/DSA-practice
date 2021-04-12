function minNumberOfJumps(array) {
  const dp = new Array(array.length).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] + j >= i) {
        dp[i] = Math.min(dp[j] + 1, dp[i]);
      }
    }
  }
  return dp[dp.length - 1];
}
