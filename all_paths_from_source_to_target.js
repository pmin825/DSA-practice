const allPathsSourceTarget = (graph, results = []) => {
  helper(graph, results, [0], 0);
  return results;
}

const helper = (graph, results, currentPath, node) => {
  let lastNode = graph.length - 1;
  if (node === lastNode) {
      results.push(currentPath.slice(0));
      return;
  }
  
  for (let i = 0; i < graph[node].length; i++) {
      currentPath.push(graph[node][i]);
      helper(graph, results, currentPath, graph[node][i]);
      currentPath.pop();
  }
}