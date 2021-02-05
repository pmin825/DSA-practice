const subarraySum = (nums, k) => {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let total = nums[i];
        if (total === k) {
            count += 1;
        }
        for (let j = i + 1; j < nums.length; j++) {
            let check = nums[j];
            total += check;
            if (total === k) {
                count += 1;
            }
        }
    }
    return count;
};
