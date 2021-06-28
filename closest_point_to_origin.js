var kClosest = function (points, k) {
  points.sort((a, b) => {
    if (a[0] ** 2 + a[1] ** 2 > b[0] ** 2 + b[1] ** 2) {
      return 1;
    } else {
      return -1;
    }
  });

  return points.slice(0, k);
};
