class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    const sums = [];
    branchSumsHelper(root, 0, sums);
    return sums;
}

function branchSumsHelper(node, runningSum, sums) {
    if (node === null) return;

    let newRunningSum = runningSum + node.value;
    if (node.left === null && node.right === null) sums.push(newRunningSum);

    branchSumsHelper(node.left, newRunningSum, sums);
    branchSumsHelper(node.right, newRunningSum, sums);
}
