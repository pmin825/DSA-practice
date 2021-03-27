class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(height, isBalanced) {
        this.height = height;
        this.isBalanced = isBalanced;
    }
}

function heightBalancedBinaryTree(tree) {
    return balanceCheck(tree).isBalanced;
}

function balanceCheck(tree) {
    if (tree === null) return new TreeInfo(-1, true);

    const isBalanced =
        balanceCheck(tree.left).isBalanced &&
        balanceCheck(tree.right).isBalanced &&
        Math.abs(
            balanceCheck(tree.left).height - balanceCheck(tree.right).height
        ) <= 1;

    const height = Math.max(
        balanceCheck(tree.left).height,
        balanceCheck(tree.right).height
    );
    return new TreeInfo(height + 1, isBalanced);
}
