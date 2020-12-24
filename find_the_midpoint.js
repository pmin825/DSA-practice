function midpoint(list) {
    let slow = list.head
    let fast = list.head

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
}

//finding the midpoint of a linked list