strs = ["10","0001","111001","1","0"], m = 5, n = 3

const findMaxForm = (strs, m, n) => {
    let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    for (const s of strs) {
        let zero = 0,
            one = 0;
        for (const c of s) {
            c === "0" ? zero++ : one++;
        }
        
        for (let i = m; i >= zero; i--) {
            for (let j = n; j >= one; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
            }
        }
    }
    return dp[m][n];
};

findMaxForm(strs, m, n)
