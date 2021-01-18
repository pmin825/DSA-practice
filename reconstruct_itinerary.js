/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const map = {};
    const res = [];
    
    const dfs = (node) => {
    //   const des = map[node];
      while(map[node] && map[node].length > 0) {
        dfs(map[node].shift());
      }
      // push node to top of array result
      res.unshift(node);t 
    }
    
    
    // ES6: Destructuring array
    for (let [dep, des] of tickets) {
      // Spread syntax
      map[dep] = [...(map[dep] || []), des];
    }
    
    for (let loc in map) {
      map[loc].sort();
    }
    dfs('JFK');
    return res;
  };