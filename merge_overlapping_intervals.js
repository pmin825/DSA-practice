function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  const results = [];
  let start = array[0][0];
  let end = array[0][1];

  for (let i = 1; i < array.length; i++) {
    let checkStart = array[i][0];
    let checkEnd = array[i][1];

    if (checkStart > end) {
      results.push([start, end]);
      start = checkStart;
      end = checkEnd;
    } else {
      if (checkEnd > end) {
        end = checkEnd;
      }
    }
    if (i === array.length - 1) results.push([start, end]);
  }
  return results;
}
