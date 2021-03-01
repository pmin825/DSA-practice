const reverseWords = (s) => {
    let newSen = [];
    let sArr = s.split(" ");
    for (let i = 0; i < sArr.length; i++) {
        let word = sArr[i];
        let reversed = word.split("").reverse().join("");

        newSen.push(reversed);
    }
    return newSen.join(" ");
};
