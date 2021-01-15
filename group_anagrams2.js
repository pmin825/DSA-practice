/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let hash = {};
    
    for (const char of s) {
        if (!hash[char]) {
            hash[char] = 1;
        }   else {
            hash[char] += 1;
        }
    }
    
    for (const char of t) {
        if (!hash[char]) return false;
        hash[char] -= 1;
    }
    
    return (Object.values(hash).every(value => value === 0) )
};