class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function reconstructBst(preOrderTraversalValues) {
    const currentValue = preOrderTraversalValues[0];
    if (preOrderTraversalValues.length === 0) return null;
    let rightIdx = preOrderTraversalValues.length;

    for (let i = 1; i < preOrderTraversalValues.length; i++) {
        const value = preOrderTraversalValues[i];
        if (value >= currentValue) {
            rightIdx = i;
            break;
        }
    }
    const leftSubTree = reconstructBst(
        preOrderTraversalValues.slice(1, rightIdx)
    );
    const rightSubTree = reconstructBst(
        preOrderTraversalValues.slice(rightIdx)
    );
    return new BST(currentValue, leftSubTree, rightSubTree);
}
