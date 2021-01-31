const twoSum = (nums, target) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    let num = nums[i];

    if (diff in hash) {
      return [i, hash[diff]];
    } else {
      hash[num] = i;
    }
  }
};
