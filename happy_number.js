const isHappy = (n) => {
  const unique = new Set();
  let numString = n.toString();

  while (true) {
    let result = 0;
    for (const num of numString) {
      result += Math.pow(Number(num), 2);
    }
    if (unique.has(result)) return false;
    if (result === 1) return true;
    unique.add(result);
    numString = result.toString();
  }
};
