function maximizeExpression(array) {
  let max = -Infinity;
  if (array.length < 4) return 0;
  for (let i = 0; i < array.length - 3; i++) {
    for (let j = i + 1; j < array.length - 2; j++) {
      for (let k = j + 1; k < array.length - 1; k++) {
        for (let l = k + 1; l < array.length; l++) {
          const result = array[i] - array[j] + array[k] - array[l];
          max = Math.max(max, result);
        }
      }
    }
  }
  return max;
}
