const findCircleNum = (isConnected) => {
  let total = 0;
  const visited = new Set();

  const dfs = (i) => {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      dfs(i);
      total++;
    }
  }
  return total;
};
