var deepestLeavesSum = function (root) {
  let sum = 0;
  let deepestLevel = 0;

  const dfs = (node, level) => {
    if (!node) return;

    if (level === deepestLevel) {
      sum += node.val;
    } else if (level > deepestLevel) {
      deepestLevel = level;
      sum = node.val;
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 0);
  return sum;
};
