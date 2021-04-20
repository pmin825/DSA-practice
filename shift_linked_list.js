class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  let length = 1;
  let tail = head;
  while (tail.next !== null) {
    tail = tail.next;
    length++;
  }

  const offset = Math.abs(k) % length;
  if (offset === 0) return head;

  const newTailPosition = k > 0 ? length - offset : offset;
  let newTail = head;
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;
  tail.next = head;
  return newHead;
}
