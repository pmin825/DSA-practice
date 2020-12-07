function runLengthEncoding(string) {
  let counter = 1;
	let encoded = "";
	for (let i = 0; i < string.length; i++){
		if (string[i] === string[i + 1] && counter < 9){
			counter++;
		} else if (string[i] === string[i + 1] && counter === 9){
			encoded += counter.toString() + string[i].toString()
			counter = 1
		} else if (string[i] !== string[i + 1]){
			encoded += counter.toString() + string[i].toString()
			counter = 1
		}
	}
	return encoded;
}