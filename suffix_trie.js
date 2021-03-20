class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = "*";
        this.populateSuffixTrieFrom(string);
    }

    populateSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubstringAt(i, string);
        }
    }

    insertSubstringAt(i, string) {
        let node = this.root;
        for (let j = i; j < string.length; j++) {
            let char = string[j];
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node[this.endSymbol] = true;
    }

    contains(string) {
        let node = this.root;
        for (const char of string) {
            if (!node[char]) return false;
            node = node[char];
        }
        return node[this.endSymbol] === true;
    }
}
