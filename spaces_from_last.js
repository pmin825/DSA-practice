function fromLast(list, n) {
    let slow = list.head;
    let fast = list.head;
    let last = list.getLast();
    
    let count = 1;
    while (count <= n) {
        fast = fast.next
        count++;
    }
    
    while (fast !== last) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}