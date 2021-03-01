const reverseString = (s) => {
    let mid = Math.floor(s.length / 2);

    for (let i = 0; i < mid; i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
};
