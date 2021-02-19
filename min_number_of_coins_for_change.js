// O(nd) time | O(n) space

function minNumberOfCoinsForChange(n, denoms) {
    let coins = new Array(n + 1).fill(Infinity);
    coins[0] = 0;

    for (const denom of denoms) {
        for (let i = 0; i < coins.length; i++) {
            if (denom <= i) {
                coins[i] = Math.min(coins[i], coins[i - denom] + 1);
            }
        }
    }
    return coins[n] !== Infinity ? coins[n] : -1;
}
