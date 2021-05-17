const titleToNumber = (columnTitle) => {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let answer = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const char = columnTitle[i];
    answer +=
      (alpha.indexOf(char) + 1) * Math.pow(26, columnTitle.length - 1 - i);
  }

  return answer;
};
