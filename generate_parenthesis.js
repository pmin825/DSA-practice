const generateParenthesis = (n) => {
    const arr = [];
    createStr(n, n, "");
    return arr;

    function createStr(open, close, str) {
        if (!open && !close && str.length) return arr.push(str);
        if (open) createStr(open - 1, close, str + "(");
        if (close > open) createStr(open, close - 1, str + ")");
    }
};
