// This is an input class. Do not edit.
// O(n) time | O(h) space
// where n is the number of nodes, h is the height of the binary tree.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if (tree === null) return new TreeInfo(0, 0);

  const leftSub = getTreeInfo(tree.left);
  const rightSub = getTreeInfo(tree.right);
  const longestPathThruRoot = leftSub.height + rightSub.height;
  const currentDiameter = Math.max(
    leftSub.diameter,
    rightSub.diameter,
    longestPathThruRoot
  );
  const currentHeight = Math.max(leftSub.height, rightSub.height);

  return new TreeInfo(currentDiameter, currentHeight + 1);
}
