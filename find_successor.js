// This is an input class. Do not edit.
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

function leftMostChild(node) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

function rightMostParent(node) {
    let current = node;
    while (current.parent !== null && current.parent.right === node) {
        current = current.parent;
    }
    return current.parent;
}
