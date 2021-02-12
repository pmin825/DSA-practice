const longestCommonPrefix = (strs) => {
    let common = "";
    let word = strs[0];
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        for (let j = 0; j < strs.length; j++) {
            if (!(char === strs[j][i])) {
                return common;
            } else {
                if (j === strs.length - 1) common += char;
            }
        }
    }
    return common;
};
