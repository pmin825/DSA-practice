const productExceptSelf = (nums) => {
    let products = new Array(nums.length).fill(0);
    let currProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        products[i] = currProduct;
        currProduct *= nums[i];
    }

    currProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        products[i] *= currProduct;
        currProduct *= nums[i];
    }

    return products;
};
