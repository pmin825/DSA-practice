const lengthOfLongestSubstring = (s) => {
  let start = 0, max = 0;
  let map = new Map();
  
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if (map.get(char) >= start) start = map.get(char) + 1;
      map.set(char, i);
      max = Math.max(max, i - start + 1);
  }
  return max;
}