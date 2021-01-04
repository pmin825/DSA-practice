// O(n) time O(1) space

function kadanesAlgorithm(array) {
  let maxSum = array[0];
	let currentSum = 0; 
	
	for (const num of array) {
		if (currentSum + num > num) {
			currentSum = currentSum + num; 
		}	else {
			currentSum = num;
		}
		
		maxSum = Math.max(currentSum, maxSum);
	}
	return maxSum;
}