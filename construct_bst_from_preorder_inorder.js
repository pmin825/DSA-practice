/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
    const indexLookUp = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexLookUp.set(inorder[i], i);
    }

    const helper = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd || inStart > inEnd) return null;
        let value = preorder[preStart];
        let index = indexLookUp.get(value);
        let leftTreeNodeCount = index - inStart;
        let root = new TreeNode(value);
        root.left = helper(
            preStart + 1,
            preStart + leftTreeNodeCount,
            inStart,
            index - 1
        );
        root.right = helper(
            preStart + leftTreeNodeCount + 1,
            preEnd,
            index + 1,
            inEnd
        );
        return root;
    };

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
