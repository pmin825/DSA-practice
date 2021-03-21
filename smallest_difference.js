function smallestDifference(arrayOne, arrayTwo) {
	let min = Infinity;
	let result = [];
	
	for (let i = 0; i < arrayOne.length; i++) {
		let diff;
		for (let j = 0; j < arrayTwo.length; j++) {
			if (
					arrayOne[i] >= 0 && arrayTwo[j] >= 0 ||
					arrayOne[i] < 0 && arrayTwo[j] < 0
			)	{
				diff = Math.abs(arrayOne[i] - arrayTwo[j])
			}	else {
				diff = Math.abs(arrayOne[i]) + Math.abs(arrayTwo[i]);
			}
			if (diff < min) {
				min = diff;
				result = [arrayOne[i], arrayTwo[j]];
			}
		}
	}	
	return result;
}
