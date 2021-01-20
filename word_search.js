/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (existHelper(board, word, 0, i, j)) return true;
        }
    }
    return false;
};

var existHelper = function (board, word, wordIdx, i, j) {
    if (
        i < 0 ||
        i >= board.length ||
        j < 0 ||
        j >= board[0].length ||
        board[i][j] !== word[wordIdx]
    )
        return false;
    if (wordIdx === word.length - 1) return true;

    let temp = board[i][j];
    board[i][j] = "visited";

    let check =
        existHelper(board, word, wordIdx + 1, i - 1, j) ||
        existHelper(board, word, wordIdx + 1, i + 1, j) ||
        existHelper(board, word, wordIdx + 1, i, j - 1) ||
        existHelper(board, word, wordIdx + 1, i, j + 1);
    if (check) {
        return true;
    } else {
        board[i][j] = temp;
        return false;
    }
};
