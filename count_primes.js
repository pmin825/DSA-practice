const countPrimes = (n) => {
  const dp = new Array(n).fill(true);
  dp[0] = false;
  dp[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (dp[i]) {
      for (let j = i * i; j < n; j += i) {
        dp[j] = false;
      }
    }
  }
  return dp.filter((val) => val).length;
};
