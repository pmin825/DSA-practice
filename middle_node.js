const middleNode = (head) => {
  let totalNodes = 0;
  let currentNode = head;

  while (currentNode) {
    totalNodes += 1;
    currentNode = currentNode.next;
  }

  const midPoint =
    totalNodes % 2 !== 0
      ? Math.ceil(totalNodes / 2)
      : Math.ceil(totalNodes / 2) + 1;

  let nodeCount = 0;
  currentNode = head;
  while (currentNode) {
    nodeCount += 1;
    if (nodeCount === midPoint) return currentNode;
    currentNode = currentNode.next;
  }
};
