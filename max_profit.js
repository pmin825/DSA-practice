const maxProfit = (prices) => {
  let max = 0;
  let min = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
      min = Math.min(prices[i], min);
      max = Math.max(prices[i] - min, max);
  }
  return max;
}