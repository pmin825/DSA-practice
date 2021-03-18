function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let wait = 0;

    for (let i = 0; i < queries.length; i++) {
        wait += queries[i] * (queries.length - (i + 1));
    }
    return wait;
}
