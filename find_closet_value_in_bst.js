// O(log(n)) time | O(log(n)) space

// function findClosestValueInBst(tree, target) {
//   return findClosestValueInBstHelper(tree, target, tree.value)
// }

// function findClosestValueInBstHelper(tree, target, closest) {
// 	if (tree === null) return closest;
// 	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
// 		closest = tree.value;
// 	}
// 	if (tree.value === target) {
// 		return tree.value
// 	}	else if (tree.value > target) {
// 		return findClosestValueInBstHelper(tree.left, target, closest)
// 	}	else if (tree.value < target) {
// 		return findClosestValueInBstHelper(tree.right, target, closest)
// 	}	
// }

// O(n) time | O(1) space

function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
	while (tree !== null) {
		if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
			closest = tree.value;
		}
		if (target === tree.value) {
			return tree.value
		}	else if (target < tree.value) {
			tree = tree.left;
		}	else if (target > tree.value) {
			tree = tree.right;
		}	
	}
	return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;