// O(n) time | O(1) space

function isPalindrome(string) {
  if (string.length === 1) return true; 
	for (let i = 0; i < string.length; i++) {
		if (string[i] !== string[string.length-1-i]) return false;
	}
	return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;