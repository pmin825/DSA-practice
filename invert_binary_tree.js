// O(n) time | O(n) space

function invertBinaryTree(tree) {
    let queue = [tree];
    while (queue.length > 0) {
        let current = queue.shift();
        if (!current) continue;
        let temp = current.left;
        current.left = current.right;
        current.right = temp;

        queue.push(current.left);
        queue.push(current.right);
    }
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
