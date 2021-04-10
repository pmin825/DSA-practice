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
  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);
  const longestPathThruRoot = leftTreeInfo.height + rightTreeInfo.height;
  const currentMaxDiameter = Math.max(
    longestPathThruRoot,
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );
  const currentHeight = Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentMaxDiameter, currentHeight + 1);
}
