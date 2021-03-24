// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, min, max) {
    if (tree === null) return true;
    if (tree.value < min || tree.value >= max) return false;

    return (
        validateBstHelper(tree.left, min, tree.value) &&
        validateBstHelper(tree.right, tree.value, max)
    );
}
