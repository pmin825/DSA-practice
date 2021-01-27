function balancedBrackets(string) {
	let matches = {")": "(", "]": "[", "}": "{"};
	let stack = [];
	
	for (const char of string) {
		if (char === '(' || char === '[' || char === '{') {
			stack.push(char);
		}
		if (char === ')' || char === ']' || char === '}') {
			if (stack.length === 0) return false;
			if (stack[stack.length - 1] === matches[char]) {
				stack.pop();
			}	else {
				return false;
			}
		}
	}
	return stack.length === 0
}