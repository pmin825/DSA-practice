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
        let current = node;
        while (current.next && current.value === current.next.value) {
            current = current.next;
        }
        node.next = current.next;
        node = node.next;
    }
    return linkedList;
}
