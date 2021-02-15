const search = (nums, target) => {
    let mid;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};
