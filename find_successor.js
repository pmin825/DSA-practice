class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  if (node.right !== null) return leftMostChild(node.right);
  return rightMostParent(node);
}

function rightMostParent(node) {
  let current = node;
  if (current.parent !== null && current.parent.right === current) {
    current = current.parent;
  }
  return current.parent;
}

function leftMostChild(node) {
  let current = node;
  while (current.left !== null) {
    current = current.left;
  }
  return current;
}
