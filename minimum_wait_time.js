function minimumWaitingTime(queries) {
	let wait = 0;
	queries.sort((a,b) => a-b);
	
	for (let i = 0; i < queries.length; i++) {
		let queriesLeft = queries.length - (i + 1);
		wait += (queries[i] * queriesLeft)
	}
	return wait
}