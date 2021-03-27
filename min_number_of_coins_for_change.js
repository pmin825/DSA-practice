// O(nd) time | O(n) space

function minNumberOfCoinsForChange(n, denoms) {
    const numCoins = new Array(n + 1).fill(Infinity);
    numCoins[0] = 0;

    for (const denom of denoms) {
        for (let amount = 1; amount <= n; amount++) {
            if (denom <= amount) {
                numCoins[amount] = Math.min(
                    numCoins[amount],
                    numCoins[amount - denom] + 1
                );
            }
        }
    }
    return numCoins[n] === Infinity ? -1 : numCoins[n];
}
