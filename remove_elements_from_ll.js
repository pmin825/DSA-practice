const removeElements = (head, val) => {
    while (head && head.val === val) {
        head = head.next;
    }
    let current = head;
    while (current) {
        let next = current.next;
        while (next && next.val === val) {
            next = next.next;
        }
        current.next = next;
        current = current.next;
    }
    return head;
};
