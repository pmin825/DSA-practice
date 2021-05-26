const findDisappearedNumbers = (nums) => {
  const result = new Array(nums.length + 1).fill(false);
  const final = [];
  const largest = nums.length;
  result[0] = true;
  for (const num of nums) {
    result[num] = true;
  }
  for (let i = 1; i < result.length; i++) {
    if (!result[i]) final.push(i);
  }
  return final;
};
