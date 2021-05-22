const isPowerOfThree = (n) => {
    let check = 1;
    if (check === n) return true;
    while (true) {
        check *= 3;
        if (check === n) return true;
        if (check > n) return false;
    }
};
