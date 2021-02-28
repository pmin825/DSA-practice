class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let head = new LinkedList(0);
    let newList = head;
    let carry = 0;
    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;

    while (nodeOne || nodeTwo || carry) {
        const valueOne = nodeOne !== null ? nodeOne.value : 0;
        const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
        const sum = valueOne + valueTwo + carry;

        const newVal = sum % 10;
        const newNode = new LinkedList(newVal);
        newList.next = newNode;
        newList = newNode;

        carry = Math.floor(sum / 10);
        nodeOne = nodeOne !== null ? nodeOne.next : null;
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
    }
    return head.next;
}
