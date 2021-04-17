function largestRectangleUnderSkyline(buildings) {
  if (!buildings.length) return 0;
  let max = -Infinity;
  for (let i = 0; i < buildings.length; i++) {
    let smallest = buildings[i];
    let count = 0;
    for (let j = i; j < buildings.length; j++) {
      count++;
      const building = buildings[j];
      if (building <= smallest) {
        smallest = building;
      }
      const currResult = smallest * count;
      max = Math.max(max, currResult);
    }
  }
  return max;
}
