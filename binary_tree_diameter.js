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

    const leftSubTree = getTreeInfo(tree.left);
    const rightSubTree = getTreeInfo(tree.right);
    const longestPathThruRoot = leftSubTree.height + rightSubTree.height;
    const currentMaxDiameter = Math.max(
        longestPathThruRoot,
        leftSubTree.diameter,
        rightSubTree.diameter
    );
    const currentHeight = 1 + Math.max(leftSubTree.height, rightSubTree.height);

    return new TreeInfo(currentMaxDiameter, currentHeight);
}
