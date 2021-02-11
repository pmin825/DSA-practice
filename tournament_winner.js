function tournamentWinner(competitions, results) {
    let scoreMap = {};
    for (let i = 0; i < competitions.length; i++) {
        let comp = competitions[i];
        if (results[i] === 0) {
            if (scoreMap[comp[1]]) {
                scoreMap[comp[1]] += 3;
            } else {
                scoreMap[comp[1]] = 3;
            }
        }
        if (results[i] === 1) {
            if (scoreMap[comp[0]]) {
                scoreMap[comp[0]] += 3;
            } else {
                scoreMap[comp[0]] = 3;
            }
        }
    }

    let scoreArr = Object.entries(scoreMap).sort((a, b) => b[1] - a[1]);
    return scoreArr[0][0];
}
