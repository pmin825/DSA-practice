/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    let finalString = '';
    let newString = '';
    let stack = [];
    let multiplier = 0;
    let numbers = ['0','1','2','3','4','5','6','7','8','9']

    
    for (const char of s) {
        if (numbers.includes(char)) {
            let newMult = multiplier + char;
            multiplier = parseInt(newMult)
        }   else if (char === '[') {
            stack.push(newString)
            stack.push(multiplier)
            multiplier = 0;
            newString = '';
        }   else if (char === ']') {
            let times = stack.pop();
            let stringSoFar = stack.pop();
            newString = stringSoFar + createString(times, newString)
        }   else {
            newString += char;
        }
    }
    return newString;
}

var createString = function(number, string) {
    let ans = '';
    let i = 0;
    while (i < number) {
        ans += string;
        i++
    }
    return ans
}