const romanToInt = (s) => {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const next = s[i + 1];

        if (values[current] < values[next]) {
            total -= values[current];
        } else {
            total += values[current];
        }
    }
    return total;
};
