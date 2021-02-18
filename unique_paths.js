const uniquePaths = (m, n) => {
    const res = [];
    for (let i = 0; i < m; i++) res.push([...new Array(n).fill(1)]); // initialize list

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            res[i][j] = res[i - 1][j] + res[i][j - 1];
        }
    }

    return res[m - 1][n - 1];
};
