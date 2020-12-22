// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
    let steps = [1, 2]
    let ways = new Array(n + 1).fill(0)
    ways[0] = 1
    
    for (const step in steps) {
        for (let i = 0; i < n + 1; i++) {
            if (step <= i) {
                ways[i] += ways[i - step];
            }
        }
    }
    return ways[n];
}