function indexEqualsValue(array) {
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num === i) return num;
  }
  return -1;
}
