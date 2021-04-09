function minRewards(scores) {
    const dp = new Array(scores.length).fill(1);

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[i - 1]) {
            dp[i] = Math.max(dp[i], dp[i - 1] + 1);
        }
    }

    for (let i = scores.length - 2; i >= 0; i--) {
        if (scores[i] > scores[i + 1]) {
            dp[i] = Math.max(dp[i], dp[i + 1] + 1);
        }
    }

    let total = 0;
    for (const reward of dp) {
        total += reward;
    }

    return total;
}
