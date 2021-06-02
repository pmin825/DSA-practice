function minimumCharactersForWords(words) {
    const count = {};
    const result = [];
    for (const word of words) {
        const temp = {};
        for (let i = 0; i < word.length; i++) {
            if (!temp[word[i]]) {
                temp[word[i]] = 1;
            } else {
                temp[word[i]] += 1;
            }
        }
        for (const key in temp) {
            if (!count[key]) {
                count[key] = temp[key];
            } else {
                count[key] = Math.max(count[key], temp[key]);
            }
        }
    }
    for (const [key, value] of Object.entries(count)) {
        let counter = value;
        while (counter > 0) {
            result.push(key);
            counter--;
        }
    }
    return result;
}
