// O(log(n)) time | O(log(1)) space

function binarySearch(array, target) {
    let left = 0;
	let right = array.length - 1;
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