const moveZeroes = (nums) => {
  let idx = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[idx] = nums[i]
          idx++
      } 
  }
  
  for (let i = idx; i < nums.length; i++) {
      nums[i] = 0;
  }
}