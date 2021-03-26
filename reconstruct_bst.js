class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function reconstructBst(preOrderTraversalValues) {
    if (!preOrderTraversalValues.length) return null;
    const node = preOrderTraversalValues[0];
    let rightIdx = preOrderTraversalValues.length;
    for (let i = 1; i < preOrderTraversalValues.length; i++) {
        let value = preOrderTraversalValues[i];
        if (value >= node) {
            rightIdx = i;
            break;
        }
    }
    const left = reconstructBst(preOrderTraversalValues.slice(1, rightIdx));
    const right = reconstructBst(preOrderTraversalValues.slice(rightIdx));
    return new BST(node, left, right);
}
