const wordBreak = (s, wordDict) => {
  if (!wordDict.length) return false;
  const dp = new Array(s.length + 1).fill(false);
  const dict = new Set(wordDict);
  dp[0] = true;

  for (let start = 0; start < s.length; start++) {
    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);
      if (dp[start] === true && dict.has(word)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
};