class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        let node = this.root;
        let queue = [node];

        while (queue.length) {
            let currentNode = queue.shift();
            queue.push(...currentNode.children);
            fn(currentNode);
        }
    }
}

// You shouldn't need to modify the Node class
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        });
    }
}
