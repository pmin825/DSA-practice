function productSum(array, totalDepth = 1) {
	let totalSum = 0; 
	for (let i = 0; i < array.length; i++) { 
		let el = array[i]; 
		if (el instanceof Array) {
			totalSum += productSum(el, totalDepth + 1) 
		}	else {
			totalSum += el; 
		}
	}
	return totalSum * totalDepth;
}