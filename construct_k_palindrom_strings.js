const canConstruct = (s, k) => {
    const count = {};
    if (s.length < k) return false;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!count[char]) {
            count[char] = 1;
        } else {
            count[char] += 1;
        }
    }

    let oddChars = 0;
    for (const char in count) {
        if (count[char] % 2 === 1) {
            oddChars += 1;
        }
    }
    return oddChars <= k;
};
