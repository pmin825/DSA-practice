const reverseList = (head) => {
    let prev = null;
    while (head) {
        const next = head.next;
        const curr = head;
        curr.next = prev;
        head = next;
        prev = curr;
    }

    return prev;
};
