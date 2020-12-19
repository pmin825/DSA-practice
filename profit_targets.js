// find distinct pair of stocks that is = to target
// stocksProfit = [5, 7, 9, 13, 11, 6, 6, 3, 3]
// target = 12 profit's target
// there are 4 pairs of stocks, but only 3 distinc pairs 

function stockPairs(stocksProfit, target) {
    let stocks = new Set()
    for (let num of stocksProfit) {
        let diff = target - num
        if (stocks.has(diff) && !stockPairs.has(`${num}-${diff}`) && !stockPairs.has(`${diff} - ${num}`)) {
            count +=
            stockPairs.add(`${diff} - ${num}`);
        }
        stocks.add(num);
    }
    return count;
}

function stockPairs(stocksProfit, target) {
  // Write your code here
  const pairIndex = new Set();
  const hash = new Set();
  for (const num of stocksProfit) {
    if (hash.has(num)) {
      pairIndex.add(Math.max(target - num, num));
    }
    hash.add(target - num);
  }

  return pairIndex.size;
}