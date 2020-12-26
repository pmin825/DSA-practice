class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
    insert(data) {
        let node = this;
        while (node.left !== null && node.right !== null) {
            if (data < node.data) {
                node = node.left
            }   else {
                node = node.right
            }
        }
        if (data < node.data) {
            node.left = new Node(data);
        }
        if (data >= node.data) {
            node.right = new Node(data);
        } 
    }
    
    contains(data) {
        let node = this;
        while (node.left !== null && node.right !== null) {
            if (data < node.data) {
                node = node.left;
            }   else if (data > node.data) {
                node = node.right;
            }   else {
                return node;
            }
        }
        return null;
    }
    
}