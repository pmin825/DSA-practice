function sortStack(stack) {
  if (stack.length <= 1) return stack;
  const current = stack.pop();
  sortStack(stack);
  insertInSortedOrder(stack, current);
  return stack;
}

function insertInSortedOrder(stack, value) {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }

  const current = stack.pop();
  insertInSortedOrder(stack, value);
  stack.push(current);
}
