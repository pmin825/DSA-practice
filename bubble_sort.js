// best case: O(n) time O(1) space;
// worst case: O(n^2) time O(1) space; 

function bubbleSort(array) {
	let sorted = false;
	
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				sorted = false;
			}
		}
	}
	return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;