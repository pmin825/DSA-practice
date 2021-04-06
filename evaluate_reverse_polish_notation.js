var evalRPN = function (tokens) {
    const stack = [];
    const set = new Set(["+", "-", "/", "*"]);
    for (const token of tokens) {
        if (!set.has(token)) {
            stack.push(token);
        } else {
            let result;

            if (token === "+") {
                result =
                    parseInt(stack[stack.length - 2]) +
                    parseInt(stack[stack.length - 1]);
            } else if (token === "-") {
                result =
                    parseInt(stack[stack.length - 2]) -
                    parseInt(stack[stack.length - 1]);
            } else if (token === "/") {
                result = Math.trunc(
                    (parseInt(stack[stack.length - 2]) || 0) /
                        parseInt(stack[stack.length - 1])
                );
            } else if (token === "*") {
                result =
                    parseInt(stack[stack.length - 2]) *
                    parseInt(stack[stack.length - 1]);
            }
            stack.pop();
            stack.pop();
            stack.push(result);
        }
    }
    return stack.pop();
};
