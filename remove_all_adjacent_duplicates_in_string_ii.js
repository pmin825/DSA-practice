const removeDuplicates = (s, k) => {
  let stack = [];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1] += 1;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([char, 1]);
    }
  }

  let string = "";
  for (let [char, count] of stack) {
    string += char.repeat(count);
  }
  return string;
};
