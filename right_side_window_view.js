var rightSideView = function(root, depth = 0, result = []) {
    if(root == null) return result
    result[depth] = root.val
    rightSideView(root.left, depth+1, result)
    rightSideView(root.right, depth+1, result)
    return result
};