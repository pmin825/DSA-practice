const maxRepeating = (sequence, word) => {
    let currentWord = word;
    let count = 0;
    while (sequence.includes(currentWord)) {
        count++;
        currentWord = currentWord + word;
    }
    return count;
};
