const minDeletions = (s) => {
  const count = {};
  let deletions = 0;

  for (const char of s) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }

  const unique = new Set();
  for (const key in count) {
    while (unique.has(count[key])) {
      deletions++;
      count[key] -= 1;
    }
    if (count[key] > 0) unique.add(count[key]);
  }
  return deletions;
};
