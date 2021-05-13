const minOperations = (s) => {
  const arr = s.split("");
  let minFlips = 0;
  let zeroFirst = 0;
  let oneFirst = 0;

  let expected = "0";
  for (const coin of arr) {
    if (coin !== expected) {
      zeroFirst++;
    }
    expected = flipCoin(expected);
  }

  expected = "1";
  for (const coin of arr) {
    if (coin !== expected) {
      oneFirst++;
    }
    expected = flipCoin(expected);
  }

  minFlips = Math.min(zeroFirst, oneFirst);
  return minFlips;
};

const flipCoin = (expected) => {
  if (expected === "0") return "1";
  if (expected === "1") return "0";
};
