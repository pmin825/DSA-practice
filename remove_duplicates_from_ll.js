const deleteDuplicates = (head) => {
  let current = head;

  while (current !== null) {
    if (current.next && current.val === current.next.val) {
      let travelNode = current.next;
      while (travelNode && travelNode.val === current.val) {
        travelNode = travelNode.next;
      }
      current.next = travelNode;
      current = current.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
