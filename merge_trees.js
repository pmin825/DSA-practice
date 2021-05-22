const mergeTrees = (root1, root2) => {
    if (!root1 && !root2) return null;
    const newRoot = new TreeNode(
        ((root1 && root1.val) || 0) + ((root2 && root2.val) || 0)
    );
    newRoot.left = mergeTrees(root1 && root1.left, root2 && root2.left);
    newRoot.right = mergeTrees(root1 && root1.right, root2 && root2.right);
    return newRoot;
};
