const threeSum = (array) => {
    const results = [];
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            let sum = array[i] + array[left] + array[right];
            if (sum === 0) {
                results.push([array[i], array[left], array[right]]);
                while (array[left + 1] === array[left]) left++;
                while (array[right - 1] === array[right]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }

        while (array[i + 1] === array[i]) i++;
    }
    return results;
};

//test
