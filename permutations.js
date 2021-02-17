function getPermutations(array) {
	const permutations = [];
	permutationsHelper(array, [], permutations);
	return permutations;
}

function permutationsHelper(array, currentPerm, permutations) {

	if (!array.length && currentPerm.length) {
		permutations.push(currentPerm);
	}	else {
		for (let i = 0; i < array.length; i++) {
			const newArray = array.slice(0, i).concat(array.slice(i + 1));
			const newPerm = currentPerm.concat([array[i]]);
			permutationsHelper(newArray, newPerm, permutations);
		}
	}
}