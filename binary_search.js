// O(log(n)) time | O(log(1)) space

function binarySearch(array, target) {
    return bSearchHelper(array, target, 0, array.length - 1);
}

function bSearchHelper(array, target, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === target) return mid;
        if (target > array[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
