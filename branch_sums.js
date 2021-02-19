class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    const sums = [];
    helper(root, 0, sums);
    return sums;
}

function helper(node, runningSum, sums) {
    if (!node) return;
    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }
    helper(node.left, newRunningSum, sums);
    helper(node.right, newRunningSum, sums);
}
