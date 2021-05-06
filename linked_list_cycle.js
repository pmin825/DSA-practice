const hasCycle = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
};
