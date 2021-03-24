function minHeightBst(array) {
    return constructBst(array, 0, array.length - 1);
}

function constructBst(array, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const bst = new BST(array[mid]);
    bst.left = constructBst(array, start, mid - 1);
    bst.right = constructBst(array, mid + 1, end);
    return bst;
}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}
