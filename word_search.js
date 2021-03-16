/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (wordFinder(board, i, j, word, 0)) {
                return true;
            }
        }
    }
    return false;
};

const wordFinder = (board, i, j, word, charCount) => {
    if (
        i < 0 ||
        j < 0 ||
        i >= board.length ||
        j >= board[0].length ||
        board[i][j] !== word[charCount]
    )
        return false;

    if (charCount === word.length - 1) return true;

    let temp = board[i][j];
    board[i][j] = "visited";

    let check =
        wordFinder(board, i - 1, j, word, charCount + 1) ||
        wordFinder(board, i + 1, j, word, charCount + 1) ||
        wordFinder(board, i, j - 1, word, charCount + 1) ||
        wordFinder(board, i, j + 1, word, charCount + 1);

    if (check) {
        return true;
    } else {
        board[i][j] = temp;
    }
};
