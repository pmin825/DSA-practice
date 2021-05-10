const isPalindrome = (head) => {
    let slow = (fast = head);
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast) {
        slow = slow.next;
    }

    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    fast = head;
    while (prev) {
        if (prev.val !== fast.val) {
            return false;
        }
        prev = prev.next;
        fast = fast.next;
    }
    return true;
};
