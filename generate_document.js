function generateDocument(characters, document) {
  const count = {};
  for (const char of characters) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }

  for (const char of document) {
    if (!count[char]) {
      return false;
    } else {
      count[char] -= 1;
      if (count[char] < 0) return false;
    }
  }
  return true;
}
