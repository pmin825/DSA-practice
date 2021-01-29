function searchInSortedMatrix(matrix, target) {
	let row = 0;
	let col = 0;
  
	while (row < matrix.length && col < matrix[0].length) {
		if (matrix[row][col] === target) return [row, col]
		col++
		if (col > matrix[0].length - 1) {
			col = 0;
			row++
		}
	}
	return [-1, -1];
}

// O(n + m) time || O(1) space 