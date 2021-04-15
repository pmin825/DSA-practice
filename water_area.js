function waterArea(heights) {
  if (!heights.length) return 0;
  const results = new Array(heights.length).fill(0);
  let leftMax = -Infinity;
  let rightMax = -Infinity;

  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    const prev = heights[i - 1] || 0;
    leftMax = Math.max(prev, leftMax);
    if (height < leftMax) {
      results[i] = leftMax - height;
    }
  }
  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i];
    const prev = heights[i + 1] || 0;
    rightMax = Math.max(prev, rightMax);

    if (height < rightMax) {
      if (rightMax - height < results[i]) {
        results[i] = rightMax - height;
      }
    } else {
      results[i] = 0;
    }
  }
  return results.reduce((a, b) => a + b);
}
