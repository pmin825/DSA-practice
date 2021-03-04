const increasingTriplet = (nums) => {
  if (nums.length < 3) return false;
  let L = 0;
  let M = 1;
  let R = 2;
  while (
    L < nums.length - 2 &&
    R < nums.length &&
    M < nums.length - 1 &&
    L < M &&
    M < R
  ) {
    if (nums[L] < nums[M] && nums[M] < nums[R]) return true;
    if (nums[L] >= nums[M]) {
      L++;
      M = L + 1;
      R = M + 1;
    } else if (nums[R] <= nums[M]) {
      if (R === nums.length - 1) {
        M++;
        R = M + 1;
      } else R++;
    }
  }
  return false;
};
