function multiStringSearch(bigString, smallStrings) {
  const results = new Array(smallStrings.length).fill(false);
  for (let i = 0; i < smallStrings.length; i++) {
    const word = smallStrings[i];
    let start = 0;
    let end = word.length;

    while (end <= bigString.length) {
      if (bigString.substring(start, end) === word) {
        results[i] = true;
        break;
      } else {
        start++;
        end++;
      }
    }
  }
  return results;
}
