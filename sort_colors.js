const sortColors = (nums) => {
    let zero = 0;
    let one = 0;
    let two = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zero++;
        } else if (nums[i] === 1) {
            one++;
        } else if (nums[i] === 2) {
            two++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (zero > 0) {
            nums[i] = 0;
            zero--;
            continue;
        }
        if (one > 0) {
            nums[i] = 1;
            one--;
            continue;
        }
        if (two > 0) {
            nums[i] = 2;
            two--;
            continue;
        }
    }
    return nums;
};
