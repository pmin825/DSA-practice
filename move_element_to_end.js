function moveElementToEnd(array, toMove) {
	for (let i = array.length - 1; i >= 0; i--) {
		let num = array[i];
		if (num === toMove) {
			array.splice(i, 1);
			array.push(toMove);
		}
	}
	return array;
}


// O(n) time | O(1) space
function moveElementToEnd(array, toMove) {
	let start = 0;
	let end = array.length - 1;
	
	while (start < end) {
		while (start < end && array[end] === toMove) end--;
		if (array[start] === toMove) {
			let temp = array[end];
			array[end] = array[start];
			array[start] = temp;
		}
		start++
	}
	return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;