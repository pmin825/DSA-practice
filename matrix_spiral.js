function matrix(n) {
    let grid = Array.from(Array(n), () => new Array(n))
    let startRow = 0, endRow = n - 1
    let startCol = 0, endCol = n - 1
    let count = 1;
    
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            grid[startRow][i] = count;
            count++
        }
    
        for (let j = startRow + 1; j <= endRow; j++) {
            grid[j][endCol] = count;
            count++
        }
    
        for (let k = endCol - 1; k >= startCol; k--) {
            grid[endRow][k] = count;
            count++
        }
    
        for (let l = endRow - 1; l > startRow; l--) {
            grid[l][startCol] = count;
            count++
        }
        
        startRow++
        startCol++
        endCol--
        endRow--
    }

    return grid;
}