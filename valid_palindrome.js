const isPalindrome = (s) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (alpha.includes(char.toLowerCase())) newStr += char.toLowerCase();
    }

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== newStr[newStr.length - 1 - i]) return false;
    }
    return true;
};
