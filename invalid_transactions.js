var invalidTransactions = function(transactions) {
  let invalid = [];
  let added = new Array(transactions.length).fill(false);
  
  for (let i = 0; i < transactions.length; i++) {
      let transaction1 = transactions[i].split(",")
      if (parseInt(transaction1[2]) > 1000 && !added[i]) {
         invalid.push(transaction1.join(","))
         added[i] = true; 
      }
      for (let j = 0; j < transactions.length; j++) {
          let transaction2 = transactions[j].split(",")
          if (transaction1[0] === transaction2[0] && transaction1[3] !== transaction2[3]) {
              if (Math.abs(parseInt(transaction1[1]) - parseInt(transaction2[1])) <= 60) {
                  if (!added[i]) {
                      invalid.push(transaction1.join(","))
                      added[i] = true
                  }
                  if (!added[j]) {
                      invalid.push(transaction2.join(","))
                      added[j] = true;
                  }
              }
          }
      }
  }
  return invalid;
}