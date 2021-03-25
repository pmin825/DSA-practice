function threeNumberSort(array, order) {
    let left = 0;
    let right = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num === order[0]) {
            [array[left], array[i]] = [array[i], array[left]];
            left++;
        }
    }
    for (let i = array.length - 1; i >= 0; i--) {
        let num = array[i];
        if (num === order[2]) {
            [array[right], array[i]] = [array[i], array[right]];
            right--;
        }
    }
    return array;
}
