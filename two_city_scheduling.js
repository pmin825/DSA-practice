var twoCitySchedCost = function(costs) {
    let diffs = [];
    let half = Math.floor(costs.length/2);
    let total = 0;

    costs.sort((a,b) => a[0]-a[1] - (b[0]-b[1]));
    
    for (let i = 0; i < costs.length; i++) {
        if (i < half) {
            total += costs[i][0];
        }   else {
            total += costs[i][1];
        }
    }
    return total;
};


// https://leetcode.com/problems/two-city-scheduling/submissions/