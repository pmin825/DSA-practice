const mergeTwoLists = (l1, l2) => {
  let head = new ListNode();
  let newList = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      newList.next = l1;
      l1 = l1.next;
    } else {
      newList.next = l2;
      l2 = l2.next;
    }
    newList = newList.next;
  }
  newList.next = l1 || l2;
  return head.next;
};
