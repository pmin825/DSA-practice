// This is an input class. Do not edit.
class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function reconstructBst(preOrderTraversalValues) {
    if (!preOrderTraversalValues.length) return null;
    let node = preOrderTraversalValues[0];
    let right = preOrderTraversalValues.length;

    for (let i = 1; i < preOrderTraversalValues.length; i++) {
        let nextNode = preOrderTraversalValues[i];

        if (nextNode >= node) {
            right = i;
            break;
        }
    }
    const leftSubTree = reconstructBst(preOrderTraversalValues.slice(1, right));
    const rightSubTree = reconstructBst(preOrderTraversalValues.slice(right));
    return new BST(node, leftSubTree, rightSubTree);
}
