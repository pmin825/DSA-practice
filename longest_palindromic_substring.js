const longestPalindrome = (s) => {
    let longest = s[0];

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            let substring = s.slice(i, j + 1);

            if (substring.length > longest.length && isPalindrome(substring)) {
                longest = substring;
            }
        }
    }
    return longest;
};

const isPalindrome = (s) => {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
};
