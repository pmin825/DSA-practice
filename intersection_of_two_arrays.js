const intersect = (nums1, nums2) => {
  const count = {};
  const results = [];

  for (const num of nums1) {
    if (count[num]) {
      count[num] += 1;
    } else {
      count[num] = 1;
    }
  }

  for (const num of nums2) {
    if (count[num]) {
      results.push(num);
      count[num]--;
    }
  }
  return results;
};
