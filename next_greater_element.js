function nextGreaterElement(array) {
  const result = [];
  if (!array.length) return [];
  if (array.length <= 1) return [-1];
  for (let i = 0; i < array.length; i++) {
    const length = array.length;
    for (let j = i + 1; j < length + i; j++) {
      const idx = j % array.length;
      if (array[idx] > array[i]) {
        result.push(array[idx]);
        break;
      }
      if (j === array.length + i - 1) {
        result.push(-1);
        break;
      }
    }
  }

  return result;
}
