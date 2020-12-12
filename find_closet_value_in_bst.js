// O(log(n)) time | O(log(n)) space

function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
	if (tree === null) return closest;
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	if (tree.value === target) {
		return tree.value
	}	else if (tree.value > target) {
		return findClosestValueInBstHelper(tree.left, target, closest)
	}	else if (tree.value < target) {
		return findClosestValueInBstHelper(tree.right, target, closest)
	}	
}
