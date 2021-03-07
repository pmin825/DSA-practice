function cycleInGraph(edges) {
  const visited = new Array(edges.length).fill(false);
  const currentlyInStack = new Array(edges.length).fill(false);

  for (let i = 0; i < edges.length; i++) {
    if (visited[i]) continue;

    const containsCycle = isNodeInCycle(i, edges, visited, currentlyInStack);
    if (containsCycle) return true;
  }

  return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
  visited[node] = true;
  currentlyInStack[node] = true;

  const neighbors = edges[node];
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      const containsCycle = isNodeInCycle(
        neighbor,
        edges,
        visited,
        currentlyInStack
      );
      if (containsCycle) return true;
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }
  currentlyInStack[node] = false;
  return false;
}
