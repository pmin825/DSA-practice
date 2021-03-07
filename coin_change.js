const coinChange = (coins, amount) => {
  const numCoins = new Array(amount + 1).fill(Infinity);
  numCoins[0] = 0;

  for (const coin of coins) {
    for (let i = 0; i < numCoins.length; i++) {
      if (coin <= i) {
        numCoins[i] = Math.min(numCoins[i], numCoins[i - coin] + 1);
      }
    }
  }
  return numCoins[amount] !== Infinity ? numCoins[amount] : -1;
};
