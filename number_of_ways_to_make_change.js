// O(nd) time | O(n) space

function numberOfWaysToMakeChange(n, denoms) {
    const ways = new Array(n + 1).fill(0);
    ways[0] = 1;

    for (const denom of denoms) {
        for (let i = 1; i <= n; i++) {
            if (denom <= i) {
                ways[i] += ways[i - denom];
            }
        }
    }
    return ways[n];
}
