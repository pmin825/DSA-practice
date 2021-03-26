// O(n) time | O(n) space

function invertBinaryTree(tree) {
    let node = tree;
    const queue = [node];
    while (queue.length) {
        let current = queue.shift();
        if (current === null) continue;
        let temp = current.left;
        current.left = current.right;
        current.right = temp;
        queue.push(current.left, current.right);
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
