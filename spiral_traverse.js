// O(n) time | O(n) space

function spiralTraverse(array) {
	let startRow = 0, endRow = array.length - 1;
	let startCol = 0, endCol = array[0].length - 1;
	let final = [];
	
	while (startRow <= endRow && startCol <= endCol) {
		for (let col = startCol; col <= endCol; col++) {
			final.push(array[startRow][col]);
		}
		
		for (let row = startRow + 1; row <= endRow; row++) {
			final.push(array[row][endCol])
		}
		
		for (let col = endCol - 1; col >= startCol; col--) {
			if (startRow === endRow) break;
			final.push(array[endRow][col])
		}
		
		for (let row = endRow - 1; row > startRow; row--) {
			if (startCol === endCol) break;
			final.push(array[row][startCol])
		}
		startRow++
		endRow--
		startCol++
		endCol--
	} 
	return final;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;