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
