const oddEvenList = (head) => {
    if (head != null) {
        let odd = head,
            even = head.next,
            evenHead = even;

        while (even && even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
    }
    return head;
};
