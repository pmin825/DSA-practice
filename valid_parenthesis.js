var isValid = function (s) {
    const hash = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    const stack = [];

    for (const char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            if (stack[stack.length - 1] !== hash[char]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};
