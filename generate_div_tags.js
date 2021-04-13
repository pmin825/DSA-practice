function generateDivTags(numberOfTags) {
  const results = [];
  generateCombos(numberOfTags, numberOfTags, "", results);
  return results;
}

function generateCombos(openTags, closeTags, prefix, results) {
  if (openTags > 0) {
    const newPrefix = prefix + "<div>";
    generateCombos(openTags - 1, closeTags, newPrefix, results);
  }

  if (closeTags > openTags) {
    const newPrefix = prefix + "</div>";
    generateCombos(openTags, closeTags - 1, newPrefix, results);
  }

  if (closeTags === 0) results.push(prefix);
}
