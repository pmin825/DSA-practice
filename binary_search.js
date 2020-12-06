// O(log(n)) time | O(log(1)) space

function binarySearch(array, target) {
	return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
	while (left <= right) {
		let mid = Math.floor((left + right)/2);
		if (target === array[mid]) {
			return mid;
		}	else if (target < array[mid]) {
			right = mid - 1;
		}	else {
			left = mid + 1;
		}
	}
	return -1
}
// Do not edit the line below.
exports.binarySearch = binarySearch;
