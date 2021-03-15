function getNthFib(n) {
    const fibs = [0, 1];
    if (n <= 1) return 0;

    for (let i = 2; i < n; i++) {
        let result = fibs[0] + fibs[1];
        let temp = fibs[1];
        fibs[1] = result;
        fibs[0] = temp;
    }
    return fibs[1];
}
