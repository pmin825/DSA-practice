class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const results = [];
  branchSumsHelper(root, 0, results);
  return results;
}

function branchSumsHelper(node, runningSum, results) {
  if (!node) return;

  if (!node.left && !node.right) {
    results.push(runningSum + node.value);
    return;
  }

  branchSumsHelper(node.left, runningSum + node.value, results);
  branchSumsHelper(node.right, runningSum + node.value, results);
}
