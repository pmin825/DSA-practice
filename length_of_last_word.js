const lengthOfLastWord = (s) => {
  let arr = s.split(" ");

  for (let i = arr.length - 1; i >= 0; i--) {
    let word = arr[i];
    if (!word.length) continue;
    return word.length;
  }
  return 0;
};
