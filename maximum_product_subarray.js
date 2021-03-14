const maxProduct = (nums) => {
    if (!nums.length) return 0;

    let min = nums[0];
    let max = nums[0];
    let finalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        let minProduct = min * num;
        let maxProduct = max * num;
        console.log(minProduct, maxProduct);
        min = Math.min(num, minProduct, maxProduct);
        max = Math.max(num, minProduct, maxProduct);
        finalMax = Math.max(finalMax, max);
    }
    return finalMax;
};
