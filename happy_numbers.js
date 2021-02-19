const isHappy = (n) => {
    let visited = new Set();
    while (true) {
        let nString = n.toString();
        visited.add(n);
        for (let i = 0; i < nString.length; i++) {
            let digit = nString[i];
            n = parseInt(digit) * parseInt(digit);
        }
        if (visited.has(n)) return false;
        if (n === 1) return true;
    }
};
