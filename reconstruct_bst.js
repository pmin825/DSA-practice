class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) return null;
  const node = preOrderTraversalValues[0];
  let rightIdx = preOrderTraversalValues.length;

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    const value = preOrderTraversalValues[i];
    if (value >= node) {
      rightIdx = i;
      break;
    }
  }
  const leftSub = reconstructBst(preOrderTraversalValues.slice(1, rightIdx));
  const rightSub = reconstructBst(preOrderTraversalValues.slice(rightIdx));
  return new BST(node, leftSub, rightSub);
}
