function hasSingleCycle(array) {
	let idx = 0;
	let count = 0;
  	while (count < array.length) {
		if (count > 0 && idx === 0) return false;
		count++
		idx = getNextIdx(idx, array);
	}
	return idx === 0;
}

function getNextIdx(idx, array) {
	const jump = array[idx];
	const nextIdx = (idx + jump) % array.length;
	return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
