// O(nd) time | O(n) space

function minNumberOfCoinsForChange(n, denoms) {
    const numCoins = new Array(n + 1).fill(Infinity);
    numCoins[0] = 0;

    for (const denom of denoms) {
        for (let i = 1; i <= n; i++) {
            if (denom <= i) {
                numCoins[i] = Math.min(numCoins[i], numCoins[i - denom] + 1);
            }
        }
    }
    return numCoins[n] !== Infinity ? numCoins[n] : -1;
}
