function largestRange(array) {
    let bestRange = [];
    let longest = 0;
    const nums = {};
    for (const num of array) {
        nums[num] = true;
    }

    for (const num of array) {
        if (!nums[num]) continue;
        nums[num] = false;
        let currLength = 1;
        let left = num - 1;
        let right = num + 1;
        while (left in nums) {
            nums[left] = false;
            currLength++;
            left--;
        }
        while (right in nums) {
            nums[right] = false;
            currLength++;
            right++;
        }
        if (currLength > longest) {
            longest = currLength;
            bestRange = [left + 1, right - 1];
        }
    }
    return bestRange;
}
