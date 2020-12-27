// O(n) time O(n) space

function firstDuplicateValue(array) {
  let hash = {};
	
	for (const num of array) {
		if (hash[num]) return num;
		hash[num] = true;
	}
	return -1
}


// O(n) time O(1) space

function firstDuplicateValue(array) {
	for (const num of array) {
		if (array[Math.abs(num) - 1] < 0) return Math.abs(num);
			array[Math.abs(num) - 1] *= -1;
	}
	return -1
}