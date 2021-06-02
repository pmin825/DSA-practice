const distributeCoins = (root) => {
  let moves = 0;

  const traverseTree = (node) => {
    if (!node) return 0;

    const left = traverseTree(node.left);
    const right = traverseTree(node.right);

    moves += Math.abs(left) + Math.abs(right);
    return left + right + node.val - 1;
  };

  traverseTree(root);

  return moves;
};
