const change = (amount, coins) => {
  const numWays = new Array(amount + 1).fill(0);
  numWays[0] = 1;

  for (const coin of coins) {
    for (let i = 1; i < numWays.length; i++) {
      if (coin <= i) {
        numWays[i] += numWays[i - coin];
      }
    }
  }
  return numWays[amount];
};
