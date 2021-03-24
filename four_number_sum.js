// O(n^3) time O(n^2) space

function fourNumberSum(array, targetSum) {
    const results = [];
      const quads = {};
      
      for (let i = 1; i < array.length - 1; i++) {
          for (let j = i + 1; j < array.length; j++) {
              const currSum = array[i] + array[j];
              const diff = targetSum - currSum;
              
              if (diff in quads) {
                  for (const pair of quads[diff]) {
                      results.push(pair.concat([array[i], array[j]]))
                  }
              }
          }
          for (let k = 0; k < i; k++) {
              const sum = array[i] + array[k];
              if (sum in quads) {
                  quads[sum].push([array[k], array[i]])
              }	else {
                  quads[sum] = [[array[k], array[i]]];
              }
          }
      }
      
      return results;
  }


// function fourNumberSum(array, targetSum) {
//     const quads = [];
//     for (let i = 0; i < array.length - 3; i++) {
//         for (let j = i + 1; j < array.length - 2; j++) {
//             for (let k = j + 1; k < array.length - 1; k++) {
//                 for (let l = k + 1; l < array.length; l++) {
//                     if (
//                         array[i] + array[j] + array[k] + array[l] ===
//                         targetSum
//                     ) {
//                         quads.push([array[i], array[j], array[k], array[l]]);
//                     }
//                 }
//             }
//         }
//     }
//     return quads;
// }
