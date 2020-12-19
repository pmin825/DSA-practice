// O(n^3) time

function longestPalindromicSubstring(string) {
  if (string.length === 1) return string;
	let longest = '';
	
	for (let i = 0; i < string.length; i++) {
		let pal = '';
		for (let j = string.length - 1; j >= 0; j--) {
			if (string.slice(i, j + 1) === string.slice(i, j + 1).split('').reverse().join('')) {
				pal = string.slice(i, j + 1);
			}
			if (pal.length >= longest.length) longest = pal;
		}
	}
	return longest;
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;