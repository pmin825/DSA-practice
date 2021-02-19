const firstUniqChar = (s) => {
    let count = {};

    for (const char of s) {
        if (count[char]) {
            count[char] += 1;
        } else {
            count[char] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (count[char] > 1) continue;
        return i;
    }
    return -1;
};
