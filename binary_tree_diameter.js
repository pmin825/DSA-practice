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

    const leftSubtree = getTreeInfo(tree.left);
    const rightSubtree = getTreeInfo(tree.right);
    const diameterThruRoot = leftSubtree.height + rightSubtree.height;
    const maxDiameter = Math.max(
        diameterThruRoot,
        leftSubtree.diameter,
        rightSubtree.diameter
    );
    const currentHeight = Math.max(leftSubtree.height, rightSubtree.height);

    return new TreeInfo(maxDiameter, currentHeight + 1);
}
