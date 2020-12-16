class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
		while (true) {
			if (value < currentNode.value) {
				if (currentNode.left === null) {
					currentNode.left = new BST(value);
					break
				}	else {
					currentNode = currentNode.left;
				}
			}	else {
				if (currentNode.right === null) {
					currentNode.right = new BST(value);
					break;
				}	else {
					currentNode = currentNode.right;
				}
			}
		}
		return this;
	}

  contains(value) {
    let currentNode = this;
		while (true) {
			if (currentNode.value === value) {
				return true;
			}	else if (currentNode.value > value) {
				if (currentNode.left === null) {
					return false;
				} else {
					currentNode = currentNode.left;
				}
			}	else if (currentNode.value < value) {
				if (currentNode.right === null) {
					return false;
				}	else {
					currentNode = currentNode.right;
				}
			}
		}
		return false;
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}

// Do not edit the line below.
exports.BST = BST;