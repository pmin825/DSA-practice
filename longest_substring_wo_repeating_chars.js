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

//alternate solution
const lengthOfLongestSubstring = (s) => {
  let longest = 0; // 3 
  let set = new Set(); // {  }
  for (let i = 0; i < s.length; i++) { // 1
      let count = 0; // 0,  
      for (let j = i; j < s.length; j++) {
          const char = s[j]; // b
          if (set.has(char)) {
              set = new Set();
              break;
          }   else {
              set.add(char);
              count++;
          }
          longest = Math.max(longest, count);
      }
  }
  
  return longest;
};