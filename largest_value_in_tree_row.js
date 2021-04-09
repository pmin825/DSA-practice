const largestValues = (root) => {
  if (!root) return [];
  const largest = [];
  const queue = [root];
  while (queue.length) {
    let max = -Infinity;
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (node.val > max) max = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    largest.push(max);
  }

  return largest;
};
