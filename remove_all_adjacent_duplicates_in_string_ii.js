const removeDuplicates = (s, k) => {
  s = s.split("");
  let check = true;

  while (check) {
    check = false;
    for (let i = 0; i < s.length; i++) {
      console.log(s[i]);
      if (s.slice(i, i + k).join("") === s[i].repeat(k)) {
        for (let j = 0; j < k; j++) {
          s[i + j] = "";
        }
        s = s.join("").split("");
        check = true;
        break;
      }
    }
  }

  return s.join("");
};
