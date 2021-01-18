/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// np 

var minWindow = function(s, t) {
    let count = 0;
    let smallest = ''
    if (s === t) return t
    if (t.length === 1 && s.includes(t[0])) return t[0]
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let subStr = s.slice(i, j + 1);

            for (let k = 0; k < t.length; k++) {
                if (!subStr.includes(t[k])) {
                    break;
                }   
                if (subStr.length >= t.length && k >= t.length - 1 && (smallest.length > subStr.length || smallest === '') && isSubStr(subStr, t)) {
                    smallest = subStr;
                    console.log(smallest)
                }
            }
                
        }
    }
    console.log(isSubStr(s,t))
    return smallest;
};

var isSubStr = function(s, t) {
    let hash = {};
    let hash2 = {};
    for (const char of s) {
        if (!hash[char]) hash[char] = 1;
        hash[char] += 1;
    }
    
    for (const char of t) {
        if (!hash2[char]) hash2[char] = 1;
        hash2[char] += 1;
    }
    
    for (let key in hash2) {
        if (hash2[key] !== hash[key]) return false;
    }
    return true;
}