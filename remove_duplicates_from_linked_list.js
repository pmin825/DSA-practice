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
        let nextNode = node.next;
        while (nextNode !== null && nextNode.value === node.value) {
            nextNode = nextNode.next;
        }
        node.next = nextNode;
        node = node.next;
    }
    return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
