function groupAnagrams(words) {
  let hash = {}; // {}
  for (const word of words) {
    let sortWord = word.split("").sort().join("");
    if (!hash[sortWord]) {
      hash[sortWord] = [word];
    } else {
      hash[sortWord].push(word);
    }
  }
  return Object.values(hash);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
