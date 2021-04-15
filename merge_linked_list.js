class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  let nodeOne = headOne;
  let nodeTwo = headTwo;
  let prev = null;

  while (nodeOne !== null && nodeTwo !== null) {
    if (nodeOne.value < nodeTwo.value) {
      prev = nodeOne;
      nodeOne = nodeOne.next;
    } else {
      if (prev !== null) prev.next = nodeTwo;
      prev = nodeTwo;
      nodeTwo = nodeTwo.next;
      prev.next = nodeOne;
    }
  }
  if (nodeOne === null) prev.next = nodeTwo;
  return headOne.value < headTwo.value ? headOne : headTwo;
}
