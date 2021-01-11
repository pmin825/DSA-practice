// O(n) time | O(n) space

function invertBinaryTree(tree) {
	let queue = [tree];
	while (queue.length) {
		let node = queue.shift();
		if (node === null) continue;
		let temp = node.left;
		node.left = node.right;
		node.right = temp;
		queue.push(node.left, node.right)
	}
	return tree;
}