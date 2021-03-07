function sortedSquaredArray(array) {
  const results = [];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    results.push(Math.pow(num, 2));
  }
  return results.sort((a, b) => a - b);
}
