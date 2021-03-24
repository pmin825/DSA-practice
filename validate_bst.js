class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    return validateHelper(tree, -Infinity, Infinity);
}

function validateHelper(tree, min, max) {
    if (tree === null) return true;
    if (tree.value >= max || tree.value < min) return false;

    return (
        validateHelper(tree.left, min, tree.value) &&
        validateHelper(tree.right, tree.value, max)
    );
}
