// O(n) time O(n) space

function largestRange(array) {
    let bestRange = [];
    let longest = 0;
    const nums = {};
    for (const num of array) {
        nums[num] = true;
    }

    for (const num of array) {
        if (!nums[num]) continue;
        nums[num] = false;
        let currLength = 1;
        let left = num - 1;
        let right = num + 1;
        while (left in nums) {
            nums[left] = false;
            currLength++;
            left--;
        }
        while (right in nums) {
            nums[right] = false;
            currLength++;
            right++;
        }
        if (currLength > longest) {
            longest = currLength;
            bestRange = [left + 1, right - 1];
        }
    }
    return bestRange;
}

// console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]))


// alternate solution
function largestRange(array) {
    let set = new Set(array);
      let sorted = Array.from(set).sort((a,b) => a-b);
      let longest = 0;
      let range = [];
      
      let count = 1;
      let start;
      if (sorted.length === 1) return [sorted[0], sorted[0]]
      for (let i = 0; i < sorted.length; i++) {
          if (count === 1) start = sorted[i];
          if (sorted[i] + 1 === sorted[i + 1]) {
              count += 1;
          }	else {
              count = 1;
          }
          if (count > longest) {
              range = [start, sorted[i + 1]];
              longest = count;
          }
      }
      return range;
  }

