// O(n) time O(1) space

function kadanesAlgorithm(array) {
    let maxSum = -Infinity;
    let currentSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] + currentSum < array[i]) {
            currentSum = array[i];
        } else {
            currentSum += array[i];
        }
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
