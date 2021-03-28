class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {
        array.push(this.name);
        const queue = [this];
        while (queue.length) {
            const current = queue.shift();
            for (const child of current.children) {
                array.push(child.name);
                queue.push(child);
            }
        }
        return array;
    }
}
