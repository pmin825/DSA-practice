const trap = (height) => {
    if (!height.length) return 0;
    let maxLeft = -Infinity;
    let maxRight = -Infinity;
    const left = [];
    const right = [];
    let runningSum = 0;

    for (let i = 0; i < height.length; i++) {
        maxLeft = Math.max(maxLeft, height[i]);
        left.push(maxLeft);
    }
    for (let i = height.length - 1; i >= 0; i--) {
        maxRight = Math.max(maxRight, height[i]);
        right[i] = maxRight;
    }

    for (let i = 0; i < height.length; i++) {
        const h = height[i];
        runningSum += Math.min(left[i], right[i]) - h;
    }

    return runningSum;
};
