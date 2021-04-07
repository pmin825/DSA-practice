// O(nm) time | O(nm) space

function levenshteinDistance(str1, str2) {
    const dp = [];
    for (let i = 0; i < str2.length + 1; i++) {
        let row = [];
        for (let j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        dp.push(row);
    }

    for (let i = 1; i < str2.length + 1; i++) {
        for (let j = 1; j < str1.length + 1; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[str2.length][str1.length];
}
