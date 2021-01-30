const allPathsSourceTarget = (graph, results = []) => {
  findPaths([0], 0, graph, results);
  return results;
} 

const findPaths = (currentPath, node, graph, results) => {
  let lastNodeIndex = graph.length - 1;
  if (node === lastNodeIndex) {
      results.push(currentPath.slice(0));
  }   else {
      for (let i = 0; i < graph[node].length; i++) {
          currentPath.push(graph[node][i]);
          findPaths(currentPath, graph[node][i], graph, results);
          currentPath.pop();
      }
  }
}