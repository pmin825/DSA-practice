const isRobotBounded = (instructions) => {
  let [x, y, dx, dy] = [0, 0, 0, 1];
  
  for (let dir of instructions) {
      if(dir == 'R') [dx, dy] = [dy, -dx];
      else if(dir == 'L') [dx, dy] = [-dy, dx]
      else [x, y] = [x + dx, y + dy];
  }
  
  return (!x && !y) || dy !== 1;
};