const findMin = (nums) => {
    let smallest = nums[0];

    for (let i = 1; i < nums.length; i++) {
        smallest = Math.min(smallest, nums[i]);
    }
    return smallest;
};
