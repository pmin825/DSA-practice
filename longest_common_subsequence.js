function longestCommonSubsequence(str1, str2) {
  const dp = Array.from(Array(str2.length + 1), () => {
    return new Array(str1.length + 1).fill([]);
  });

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1].concat(str2[i - 1]);
      } else {
        dp[i][j] =
          dp[i - 1][j].length > dp[i][j - 1].length
            ? dp[i - 1][j]
            : dp[i][j - 1];
      }
    }
  }
  return dp[str2.length][str1.length];
}
