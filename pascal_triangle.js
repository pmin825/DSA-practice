const generate = (numRows) => {
    const results = [];
    for (let i = 0; i < numRows; i++) {
        results[i] = [];
        results[i][0] = 1;
        for (let j = 1; j < i; j++) {
            results[i][j] = results[i - 1][j - 1] + results[i - 1][j];
        }
        results[i][i] = 1;
    }
    return results;
};
