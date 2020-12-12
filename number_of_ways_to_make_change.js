function numberOfWaysToMakeChange(n, denoms) { //7 [2,3,4,7]
  // Write your code here.
	let ways = new Array(n + 1).fill(0); //[1,0,1,1,2,2,3,3]
	 ways[0] = 1
		for (let i = 0; i < denoms.length; i++){//3
			for (let amount = 1; amount < n + 1; amount++){//7
					if (denoms[i] <= amount){
						ways[amount] += ways[amount - denoms[i]]//ways[7] += ways[0] = 2
				}
			} 
		}
	return ways[n]
}
// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;