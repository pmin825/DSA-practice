// O(log(n)) time | O(1) space

function indexEqualsValue(array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (array[mid] < mid) {
      left = mid + 1;
    } else if (array[mid] === mid && mid === 0) {
      return mid;
    } else if (array[mid] === mid && array[mid - 1] < mid - 1) {
      return mid;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
