function generateDocument(characters, document) {
    let count = {};
    for (let i = 0; i < characters.length; i++) {
        let char = characters[i];
        !count[char] ? (count[char] = 1) : (count[char] += 1);
    }
    for (let i = 0; i < document.length; i++) {
        let char = document[i];
        if (!count[char]) {
            return false;
        } else {
            count[char] -= 1;
            if (count[char] < 0) return false;
        }
    }
    return true;
}
