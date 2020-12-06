// best O(n) time O(1) space
// worst O(n^2) time O(1) space

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let j = i;
		while (j > 0 && array[j] < array[j-1]) {
			let temp = array[j-1];
			array[j-1] = array[j];
			array[j] = temp;
			j--
		}
	}
	return array;
 }

// Do not edit the line below.
exports.insertionSort = insertionSort;