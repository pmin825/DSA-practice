// O(n) time | O(1) space

function isMonotonic(array) {
  let nonIncreasing = true;
	let nonDecreasing = true;
	
	for (let i = 1; i < array.length; i++) {
		let prevNum = array[i-1];
		let currNum = array[i];
		
		if (currNum > prevNum) nonIncreasing = false;
		if (currNum < prevNum) nonDecreasing = false;
	}
	
	return nonIncreasing || nonDecreasing 
}