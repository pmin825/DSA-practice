const isPowerOfTwo = (n) => {
    let iterate = true;
    let exp = 0;
    let current;
    while (iterate) {
        current = Math.pow(2, exp);
        if (current === n) return true;
        if (current > n) return false;
        exp++;
    }
};
