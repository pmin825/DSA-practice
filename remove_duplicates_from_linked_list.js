class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let travelNode = linkedList;

  while (travelNode !== null) {
    if (travelNode.value === travelNode.next?.value) {
      while (travelNode.value === travelNode.next?.value) {
        travelNode.next = travelNode.next.next;
      }
    }
    travelNode = travelNode.next;
  }
  return linkedList;
}
