const lengthOfLongestSubstring = (s) => {
  let start = 0, max = 0;
  let hash = {};
  
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (hash[char] >= start) start = hash[char] + 1;
      hash[char] = i;
      max = Math.max(max, i - start + 1);
  }
  return max;
}