const maxProfit = (costPerCut, salePrice, lengths) => {
  let max = Math.max(...lengths);
  let maxProfit = 0;
  for (let i = 1; i < max; i++) {
    maxProfit = Math.max(maxProfitHelper(i, costPerCut, salePrice, lengths))
  }
  return maxProfit;
}

const maxProfitHelper = (currentLength, costPerCut, salePrice, lengths) => {
  let totalUniformRods = 0;
  let totalCuts = 0;

  for (let i = 0; i < lengths.length; i++) {
    let currentRod = lengths[i];
    if (currentLength > currentRod) continue;
    let tempCuts = 0;
    let tempTotalUniformRods = 0;

    if (currentRod % currentLength === 0) {
      tempCuts = (currentRod / currentLength) - 1;
    } else {
      tempCuts = Math.floor(currentRod / currentLength)
    }

    tempTotalUniformRods = Math.floor(currentRod / currentLength);
    if (tempTotalUniformRods * currentLength * salePrice - tempCuts * costPerCut > 0) {
      totalCuts += tempCuts;
      totalUniformRods += tempTotalUniformRods;
    }  
  }

  return totalUniformRods * currentLength * salePrice - totalCuts * costPerCut
}

console.log(maxProfit(1, 10, [1, 10, 3, 26, 103, 59]))

// totalProfit = totalUniformRods x saleLength X salePrice - totalCuts x costPerCut

// [1, 10, 3, 26, 103, 59]
// output = 1770
// optimal rod length = 6