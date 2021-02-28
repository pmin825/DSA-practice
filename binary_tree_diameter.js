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

function binaryTreeDiameter(tree) {
    return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
    if (tree === null) {
        return new TreeInfo(0, 0);
    }

    let leftTreeInfo = getTreeInfo(tree.left);
    let rightTreeInfo = getTreeInfo(tree.right);

    let longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
    let currentMaxDiameter = Math.max(
        leftTreeInfo.diameter,
        rightTreeInfo.diameter
    );
    let currentDiameter = Math.max(longestPathThroughRoot, currentMaxDiameter);
    let currentHeight = Math.max(leftTreeInfo.height, rightTreeInfo.height);

    return new TreeInfo(currentDiameter, currentHeight + 1);
}

class TreeInfo {
    constructor(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
