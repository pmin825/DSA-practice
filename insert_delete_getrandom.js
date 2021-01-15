/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.set = new Set();
};


/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.set.has(val)) {
        this.set.add(val)
        return true;
    }   else {
        return false;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    
    if (this.set.has(val)) {
        this.set.delete(val);
        return true;
    }   else {
        return false;
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let setArr = Array.from(this.set);
    let random = Math.floor(Math.random() * setArr.length)
    
    return setArr[random]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */