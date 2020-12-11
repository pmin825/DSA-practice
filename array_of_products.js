// O(n) time | O(n) space
function arrayOfProducts(array) {
	const products = new Array(array.length).fill(1); // [8, 40, 10, 20]
	
	let leftRunningProduct = 1; // 20 
	for (let i = 0; i < array.length; i++) { // 3
		products[i] = leftRunningProduct; // products[3] = 20
		leftRunningProduct *= array[i]; // 40
	}
	
	let rightRunningProduct = 1; // 40
	for (let i = array.length - 1; i >= 0; i--) { // 0
		products[i] *= rightRunningProduct; // 8
		rightRunningProduct *= array[i]; // 40
	}
	return products;
}
