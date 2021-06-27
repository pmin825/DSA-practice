var numPairsDivisibleBy60 = function (time) {
  let pairs = 0;
  const hash = {};
  for (let i = 0; i < time.length; i++) {
    const num = time[i] % 60;
    const potentialMatch = num ? 60 - num : 0;

    if (hash[potentialMatch]) {
      pairs += hash[potentialMatch];
    }

    hash[num] = hash[num] ? hash[num] + 1 : 1;
  }

  return pairs;
};
