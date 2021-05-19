const hammingWeight = (n) => {
    const numString = n.toString(2);
    let count = 0;
    for (const bit of numString) {
        if (bit === "1") count++;
    }
    return count;
};
