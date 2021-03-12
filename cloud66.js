const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

const randomWord = (length) => {
  let newStr = '';
  let randomCharIdx

  
  for (let i = 0; i < length; i++) {
    randomCharIdx = Math.floor(Math.random() * alpha.length) 
    if (i === 0 && alpha[randomCharIdx] === 'a') {
      i--;
      continue;
    }
    newStr += alpha[randomCharIdx];
  }

  return newStr;
 } 

 console.log(randomWord(5))