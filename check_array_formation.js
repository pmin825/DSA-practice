const canFormArray = (arr, pieces) => {
    arr = arr.join("");
    let current = "";
    for (let i = 0; i < pieces.length; i++) {
        pieces[i] = pieces[i].join("");
        current += pieces[i];
        if (!arr.includes(pieces[i])) return false;
    }
    return current.length == arr.length;
};
