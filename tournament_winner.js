function tournamentWinner(competitions, results) {
    const scores = {};
    for (let i = 0; i < competitions.length; i++) {
        let winner = results[i];
        let comp = competitions[i];
        let home = comp[0];
        let away = comp[1];

        if (winner === 1) {
            if (!scores[home]) {
                scores[home] = 3;
            } else {
                scores[home] += 3;
            }
        } else {
            if (!scores[away]) {
                scores[away] = 3;
            } else {
                scores[away] += 3;
            }
        }
    }

    let highScore;
    let max = 0;
    for (const [key, value] of Object.entries(scores)) {
        if (value > max) {
            max = value;
            highScore = key;
        }
    }
    return highScore;
}
