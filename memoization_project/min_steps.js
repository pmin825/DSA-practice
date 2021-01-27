var minSteps = function(s, t) {
  let hash = {};
  let count = 0;
  
  for (const char of s) {
      if (hash[char]) {
          hash[char]++
      }   else {
          hash[char] = 1
      }
  }
  
  for (const char of t) {
      if (hash[char]) {
          hash[char]--
      }   
  }
  
  for (let key in hash) {
      if (hash[key] > 0) {
          count += hash[key];
      }
  }
  return count;
};