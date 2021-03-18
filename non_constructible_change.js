function nonConstructibleChange(coins) {
    if (!coins.length) return 1;

    coins.sort((a, b) => a - b);

    let sum = 0;
    for (const coin of coins) {
        if (coin > sum + 1) return sum + 1;
        sum += coin;
    }
    return sum + 1;
}
