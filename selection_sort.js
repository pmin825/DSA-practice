// O(n^2) time | O(1) space

function selectionSort(array) {
	let currentIdx = 0;
	while (currentIdx < array.length) {
		let smallestIdx = currentIdx;
		for (let i = currentIdx; i < array.length; i++) {
			if (array[smallestIdx] > array[i]) {
				smallestIdx = i
			}
		}
		let temp = array[smallestIdx];
		array[smallestIdx] = array[currentIdx]
		array[currentIdx] = temp;
		currentIdx++
	}
	return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
