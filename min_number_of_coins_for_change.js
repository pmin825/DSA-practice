// O(nd) time | O(n) space

function minNumberOfCoinsForChange(n, denoms) {
	const numCoins = new Array(n+1).fill(Infinity) [0, 1, 1, 2]
	numCoins[0] = 0;
	
	for (const denom of denoms) { [2, 1]
		for (let amount = 0; amount < numCoins.length; amount++) {
			if (denom <= amount) {
				numCoins[amount] = Math.min(numCoins[amount], numCoins[amount-denom] + 1);
			}
		}
	}
	return numCoins[n] !== Infinity ? numCoins[n] : -1;
}