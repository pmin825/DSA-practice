function removeKthNodeFromEnd(head, k) {
    let counter = 0;
    let currentNode = head;

    while (currentNode) {
        counter += 1;
        currentNode = currentNode.next;
    }
    let target = counter - k;
    currentNode = head;
    counter = 0;

    while (currentNode) {
        console.log(target);
        if (target === 0) {
            head.value = head.next.value;
            head.next = head.next.next;
            return;
        }
        counter += 1;
        if (counter === target) {
            currentNode.next = currentNode.next.next;
            currentNode = currentNode.next;
        } else {
            currentNode = currentNode.next;
        }
    }
}
