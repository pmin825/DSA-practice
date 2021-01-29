const frequencySort = (s) => {
  let count = {};
  let result = '';
  
  for (const char of s) {
      if (count[char]) {
          count[char] += 1;
      }   else {
          count[char] = 1;
      }
  }
  
  let sorted = Object.entries(count).sort((a,b) => b[1]-a[1])
  
  for (let i = 0; i < sorted.length; i++) {
      let sub = sorted[i];
      let letter = sub[0];
      let amount = sub[1];
      
      result += letter.repeat(amount);
  }
  return result;
};