// dfs solution

var kthSmallest = function (root, k) {
  return kthSmallestHelper(root, k, []);
};

const kthSmallestHelper = (node, k, arr) => {
  if (!node) return;

  kthSmallestHelper(node.left, k, arr);
  arr.push(node.val);
  kthSmallestHelper(node.right, k, arr);

  return arr[k - 1];
};

// alternate solution

const kthSmallest = (root, k) => {
  const values = [];
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    values.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  values.sort((a, b) => a - b);
  return values[k - 1];
};
