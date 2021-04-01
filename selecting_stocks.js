// saving = 30;
// currentValue = [1, 2, 4, 6];
// futureValue = [5, 3, 5, 6];

// // saving = 250
// // currentValue = [175, 133, 109, 210, 197]
// // futureValue = [200, 125, 128, 228, 133]

// const maxProfit = (saving, currentValue, futureValue) => {
//     const profits = Array(currentValue.length)
//         .fill(0)
//         .map(() => Array(saving + 1).fill(0));

//     const newArr = currentValue.slice();
//     newArr.sort((a, b) => a - b);

//     for (let i = 1; i < currentValue.length; i++) {
//         const value = currentValue[i - 1];
//         const profit = futureValue[i - 1] - value;
//         for (let j = 1; j <= saving; j++) {
//             if (value <= j) {
//                 profits[i][j] = Math.max(
//                     profits[i - 1][j],
//                     profits[i - 1][j - value] + profit
//                 );
//             }
//         }
//     }
//     console.log(profits);
//     // console.log(profits[currentValue.length - 1][saving]);
// };

// maxProfit(saving, currentValue, futureValue);


let solveKnapsack = function(profits, weights, capacity) {
    const n = profits.length;
    if (capacity <= 0 || n == 0 || weights.length != n) return 0;
  
    const dp = Array(profits.length)
      .fill(0)
      .map(() => Array(capacity + 1).fill(0));
  
    // populate the capacity=0 columns; with '0' capacity we have '0' profit
    for (let i = 0; i < n; i++) dp[i][0] = 0;
  
    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
      if (weights[0] <= c) dp[0][c] = profits[0];
    }
  
    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
      for (let c = 1; c <= capacity; c++) {
        let profit1 = 0,
          profit2 = 0;
        // include the item, if it is not more than the capacity
        if (weights[i] <= c) profit1 = profits[i] + dp[i - 1][c - weights[i]];
        // exclude the item
        profit2 = dp[i - 1][c];
        // take maximum
        dp[i][c] = Math.max(profit1, profit2);
      }
    }
    console.log(dp)
  
    // maximum profit will be at the bottom-right corner.
    return dp[n - 1][capacity];
  };
  
  var profits = [1, 6, 10, 16];
  var weights = [1, 2, 3, 5];
  console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
  console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);