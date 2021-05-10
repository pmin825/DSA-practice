const rangeSumBST = (root, low, high) => {
    const q = [root];
    let sum = 0;
    while (q.length) {
        const node = q.shift();
        if (node && node.val >= low && node.val <= high) {
            sum += node.val;
        }
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
    }

    return sum;
};
