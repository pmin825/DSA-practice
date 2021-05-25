const combinationSum = (candidates, target) => {
  const result = [];

  const permute = (arr = [], sum = 0, idx = 0) => {
    if (sum === target) result.push(arr);
    if (sum > target) return;

    for (let i = idx; i < candidates.length; i++) {
      permute([...arr, candidates[i]], sum + candidates[i], i);
    }
  };

  permute();
  return result;
};
