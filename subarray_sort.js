function subarraySort(array) {
    let sorted = array.slice().sort((a, b) => a - b);
    let min = Infinity;
    let result;
    if (array.join("") === sorted.join("")) return [-1, -1];
    for (let i = 0; i < array.length - 1; i++) {
        let sub;
        for (let j = i + 1; j < array.length; j++) {
            sub = array.slice(i, j + 1).sort((a, b) => a - b);
            if (
                array
                    .slice(0, i)
                    .concat(sub)
                    .concat(array.slice(j + 1))
                    .join("") === sorted.join("")
            ) {
                if (sub.length < min) {
                    min = sub.length;
                    result = [i, j];
                }
            }
        }
    }
    if (!result) return [-1, -1];
    return result;
}
