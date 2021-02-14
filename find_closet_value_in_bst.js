function findClosestValueInBst(tree, target) {
    let node = tree;
    let closest = Infinity;
    let minDiff = Infinity;
    while (node !== null) {
        if (node.value === target) return node.value;
        let diff = Math.abs(target - node.value);

        if (diff < minDiff) {
            minDiff = diff;
            closest = node.value;
        }
        if (target < node.value) {
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return closest;
}
