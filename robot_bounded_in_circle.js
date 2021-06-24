const isRobotBounded = (instructions) => {
  let x = 0, y = 0, dx = 0, dy = 1;
  
  for (const dir of instructions) {
      if (dir === "L") [dx, dy] = [-dy, dx]
      else if (dir === "R") [dx, dy] = [dy, -dx]
      else [x, y] = [x + dx, y + dy];
  }
  
  return (!x && !y) || dy !== 1;
};