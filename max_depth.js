const maxDepth = (root, depth = 0) => {
  if (!root) return depth;

  return Math.max(
    maxDepth(root.left, depth + 1),
    maxDepth(root.right, depth + 1)
  );
};
