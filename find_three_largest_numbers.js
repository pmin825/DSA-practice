// O(n) time | O(1) space

function findThreeLargestNumbers(array) {
    let largest = -Infinity;
	let medium = -Infinity;
	let smallest = -Infinity;
	
	for (const num of array) {
		if (num > largest) {
			smallest = medium;
			medium = largest;
			largest = num;
		}	else if (num <= largest && num > medium) {
			smallest = medium;
			medium = num;
		}	else if (num <= medium && num > smallest) {
			smallest = num;
		}	else {
			continue;
		}
	}
	return [smallest, medium, largest];
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;