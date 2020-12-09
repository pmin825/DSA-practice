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