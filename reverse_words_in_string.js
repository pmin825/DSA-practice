function reverseWordsInString(string) {
	let newString = '';
	let word = '';
	
	if (string.length === 1) return string;
	
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		
		if (char !== " ") {
			word += char;
			if (i === string.length - 1) newString = word + ' ' + newString
		}	else {
			newString = word + ' ' + newString;
			word = '';
		}
	}
	if (string[string.length - 1] === ' ') return ' ' + newString.slice(0, -1)
	return newString.slice(0, -1);
}
