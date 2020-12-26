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

function bubbleSort(arr) {
    let sorted = false;
    
    while (!sorted) {
        sorted = true;
        for (let i = 0 ; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return arr;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;