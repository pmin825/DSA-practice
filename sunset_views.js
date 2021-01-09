function sunsetViews(buildings, direction) {
  let sunset = [];
  if (!buildings.length) return [];

  for (let i = 0; i < buildings.length; i++) {
    let west = i - 1;
    let east = i + 1;
    if (direction === "EAST") {
      while (east < buildings.length) {
        if (buildings[i] <= buildings[east]) {
          break;
        }
        if (east === buildings.length - 1) {
          sunset.push(i);
        }
        east++;
      }
    }
    if (direction === "WEST") {
      while (west >= 0) {
        if (buildings[i] <= buildings[west]) {
          break;
        }
        if (west === 0) {
          sunset.push(i);
        }
        west--;
      }
    }
  }

  if (direction === "EAST") {
    sunset.push(buildings.length - 1);
    return sunset;
  }
  if (direction === "WEST") {
    sunset.push(0);
    return sunset.sort((a, b) => a - b);
  }
}

// Do not edit the line below.
exports.sunsetViews = sunsetViews;
