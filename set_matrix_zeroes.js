var setZeroes = function(matrix) {
    let col = false;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) col = true;
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    for (i = matrix.length - 1; i >= 0; i--) {
        for (j = matrix[0].length - 1; j >= 1; j--)
            if (matrix[i][0] === 0 || matrix[0][j] === 0)
                matrix[i][j] = 0;
        if (col === true) matrix[i][0] = 0;

    }
    
    return matrix;
};