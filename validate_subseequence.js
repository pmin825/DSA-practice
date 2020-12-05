function isValidSubsequence(array, sequence) {
	for (const num of array) {
		if (num === sequence[0]) {
			sequence.shift();
		}
	}
	return sequence.length === 0;
}
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;