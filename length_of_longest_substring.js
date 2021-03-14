const lengthOfLongestSubstring = (s) => {
    let start = 0;
    let longest = 0;
    const count = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (count[char] >= start) start = count[char] + 1;
        count[char] = i;
        longest = Math.max(longest, i - start + 1);
    }
    return longest;
};
