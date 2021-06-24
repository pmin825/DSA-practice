const reorderLogFiles = (logs) => {
  const digits = [];
  const letters = [];
  
  for (const log of logs) {
      const content = log.split(" ")[1];
      if (isFinite(content)) digits.push(log);
      else letters.push(log);
  }
  
  letters.sort((a,b) => {
      let c1 = a.split(" ").slice(1).join(" ");
      let c2 = b.split(" ").slice(1).join(" ");
      
      if (c1 === c2) return a > b ? 1 : -1;
      return c1 > c2 ? 1 : - 1;
  })
  
  return [...letters, ...digits];
};