const canFinish = (numCourses, prerequisites) => {
  const adjList = Array.from(Array(numCourses), () => []);
  const visited = new Set();
  const memo = new Set();

  for (const [course, pre] of prerequisites) {
    adjList[pre].push(course);
  }

  const dfs = (pre) => {
    if (memo.has(pre)) return true;
    if (visited.has(pre)) return false;

    visited.add(pre);
    for (const course of adjList[pre]) {
      if (!dfs(course)) return false;
    }
    memo.add(pre);
    visited.delete(pre);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};
