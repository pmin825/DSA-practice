function phoneNumberMnemonics(phoneNumber) {
    const currentCombo = new Array(phoneNumber.length).fill("0");
    const combinations = [];

    helper(0, phoneNumber, currentCombo, combinations);
    return combinations;
}

function helper(idx, phoneNumber, currentCombo, combinations) {
    if (idx === phoneNumber.length) {
        const combo = currentCombo.join("");
        combinations.push(combo);
    } else {
        const digit = phoneNumber[idx];
        const letters = DIGIT_LETTERS[digit];
        for (const letter of letters) {
            currentCombo[idx] = letter;
            helper(idx + 1, phoneNumber, currentCombo, combinations);
        }
    }
}

const DIGIT_LETTERS = {
    0: ["0"],
    1: ["1"],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
};
