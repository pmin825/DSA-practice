// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findKthLargestValueInBst(tree, k) {
    const sorted = [];
    return helper(tree, k, sorted);
}

function helper(tree, k, sorted) {
    if (tree === null) return null;
    helper(tree.left, k, sorted);
    sorted.push(tree.value);
    helper(tree.right, k, sorted);
    return sorted[sorted.length - k];
}
