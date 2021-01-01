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

// alternate solution O(n^3) | O(n) space 

function longestPalindromicSubstring(string) {
	let longest = '';
	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			const substring = string.slice(i, j+1);
			if (substring.length > longest.length && isPalindrome(substring)) {
				longest = substring;
			}
		}
	}
	return longest;
}

function isPalindrome(string) {
	let leftIdx = 0;
	let rightIdx = string.length - 1;
	
	while (leftIdx < rightIdx) {
		if (string[leftIdx] !== string[rightIdx]) return false;
		leftIdx++
		rightIdx--
	}
	return true;
}


// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;