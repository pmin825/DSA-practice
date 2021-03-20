function threeNumberSum(array, targetSum) {
    const trips = [];
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            const currSum = array[i] + array[left] + array[right];
            if (currSum === targetSum) {
                trips.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currSum < targetSum) {
                left++;
            } else {
                right--;
            }
        }
    }
    return trips;
}
