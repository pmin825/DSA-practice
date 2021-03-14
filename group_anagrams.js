const groupAnagrams = (strs) => {
    const hash = {};
    for (const str of strs) {
        const key = str.split("").sort().join("");
        if (!hash[key]) {
            hash[key] = [str];
        } else {
            hash[key].push(str);
        }
    }
    return Object.values(hash);
};
