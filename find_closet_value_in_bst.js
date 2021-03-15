// function findClosestValueInBst(tree, target) {
//     let node = tree;
//     let closest = Infinity;
//     let minDiff = Infinity;
//     while (node !== null) {
//         if (node.value === target) return node.value;
//         let diff = Math.abs(target - node.value);

//         if (diff < minDiff) {
//             minDiff = diff;
//             closest = node.value;
//         }
//         if (target < node.value) {
//             node = node.left;
//         } else {
//             node = node.right;
//         }
//     }
//     return closest;
// }

function findClosestValueInBst(tree, target) {
    let closest = tree.value;
    let node = tree;

    while (node !== null) {
        if (Math.abs(target - closest) > Math.abs(target - node.value)) {
            closest = node.value;
        }
        if (target > node.value) {
            node = node.right;
        } else if (target < node.value) {
            node = node.left;
        } else {
            closest = node.value;
            break;
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
