function longestSubstringWithoutDuplication(string) {
  let max = -Infinity;
  let maxStr;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      const sub = string.substring(i, j + 1);
      if (!hasDupes(sub)) {
        if (sub.length > max) {
          max = sub.length;
          maxStr = sub;
        }
      }
    }
  }
  return maxStr;
}

function hasDupes(substring) {
  const set = new Set();

  for (let i = 0; i < substring.length; i++) {
    const char = substring[i];
    if (set.has(char)) return true;
    set.add(char);
  }
  return false;
}
