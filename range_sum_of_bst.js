// bfs

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

//dfs

const rangeSumBST = (root, low, high) => {
    return rangeSumHelper(root, low, high);
};

const rangeSumHelper = (node, low, high, sum = { total: 0 }) => {
    if (!node) return sum.total;

    if (node.val >= low && node.val <= high) {
        sum.total += node.val;
    }

    rangeSumHelper(node.left, low, high, sum);
    rangeSumHelper(node.right, low, high, sum);
    return sum.total;
};
