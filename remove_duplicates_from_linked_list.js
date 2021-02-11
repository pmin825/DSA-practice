// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let node = linkedList;

    while (node !== null) {
        let nextDistinctNode = node.next;
        while (
            nextDistinctNode !== null &&
            nextDistinctNode.value === node.value
        ) {
            nextDistinctNode = nextDistinctNode.next;
        }
        node.next = nextDistinctNode;
        node = nextDistinctNode;
    }
    return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
