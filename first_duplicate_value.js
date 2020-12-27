// O(n) time O(n) space

function firstDuplicateValue(array) {
  let hash = {};
	
	for (const num of array) {
		if (hash[num]) return num;
		hash[num] = true;
	}
	return -1
}