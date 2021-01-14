// This is an input class. Do not edit.
// O(h) time | O(1) space - where h is the height of the tree
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node) {
    if (node.right !== null) return getLeftMostChild(node.right);
      return getRightmostParent(node);
  }
  
  function getLeftMostChild(node) {
      let currentNode = node;
      while (currentNode.left !== null) {
          currentNode = currentNode.left;
      }
      
      return currentNode;
  }
  
  function getRightmostParent(node) {
      let currentNode = node;
      while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
          currentNode = currentNode.parent;
      }
      
      return currentNode.parent;
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.findSuccessor = findSuccessor;
  
for (const ele of array)

if (ele in hash)


for (let i = [key, val]; i < Object.entries(hash); i++) {
  
}