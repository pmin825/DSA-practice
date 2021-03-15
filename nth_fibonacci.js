// function getNthFib(n) {
//     const fibs = [0, 1];
//     if (n <= 1) return 0;

//     for (let i = 2; i < n; i++) {
//         let result = fibs[0] + fibs[1];
//         let temp = fibs[1];
//         fibs[1] = result;
//         fibs[0] = temp;
//     }
//     return fibs[1];
// }


//memoized
function getNthFib(n, memo = {}) {
	if (n in memo) return memo[n];
	if (n === 1) return 0;
	if (n === 2) return 1;
	
	memo[n] = getNthFib(n-1, memo) + getNthFib(n-2, memo);
	return memo[n];
}