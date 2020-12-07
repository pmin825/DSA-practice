// O(n) time | O(n) space

function caesarCipherEncryptor(string, key) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
	let newStr = '';
	for (let i = 0; i < string.length; i++) {
		let oldIndex = alpha.indexOf(string[i]);
		let newIndex = (oldIndex + key) % alpha.length;
		newStr += alpha[newIndex];
	}
	return newStr;
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;