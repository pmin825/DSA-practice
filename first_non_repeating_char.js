function firstNonRepeatingCharacter(string) {
    const hash = {};
    for (const char of string) {
        if (!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char] += 1;
        }
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (hash[char] === 1) return i;
    }
    return -1;
}
