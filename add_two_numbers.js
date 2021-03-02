const addTwoNumbers = (l1, l2) => {
    const results = [];
    let carry = 0;
    let node1 = l1;
    let node2 = l2;
    let head = new ListNode();
    let final = head;

    while (node1 && node2) {
        let sum = node1.val + node2.val + carry;
        if (sum >= 10) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }
        node1 = node1.next;
        node2 = node2.next;

        final.next = new ListNode(sum);
        final = final.next;
    }
    while (node1) {
        let sum = node1.val + carry;
        if (sum >= 10) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }
        node1 = node1.next;

        final.next = new ListNode(sum);
        final = final.next;
    }
    while (node2) {
        let sum = node2.val + carry;
        if (sum >= 10) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }
        node2 = node2.next;

        final.next = new ListNode(sum);
        final = final.next;
    }
    if (carry > 0) final.next = new ListNode(carry);
    return head.next;
};
