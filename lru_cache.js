/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity 
  this.cache = {};
  this.currentSize = 0;
  this.listOfMostRecent = new DoublyLinkedList();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!(key in this.cache)) return -1;
  this.updateMostRecent(this.cache[key]);
  return this.cache[key].value;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (!(key in this.cache)) {
      if (this.currentSize === this.capacity) {
          this.evictLeastRecent();
      }   else {
          this.currentSize++
      }
      this.cache[key] = new DoublyLinkedListNode(key, value);
  } else {
      this.replaceKey(key, value);
  }
  this.updateMostRecent(this.cache[key]);
};

LRUCache.prototype.getMostRecentKey = function() {
  if (!this.listOfMostRecent.head) return;
  return this.listOfMostRecent.head.key;
}

LRUCache.prototype.evictLeastRecent = function() {
  const keyToRemove = this.listOfMostRecent.tail.key;
  this.listOfMostRecent.removeTail();
  delete this.cache[keyToRemove];
}

LRUCache.prototype.updateMostRecent = function(node) {
  this.listOfMostRecent.setHeadTo(node);
}

LRUCache.prototype.replaceKey = function(key, value) {
  if (key in this.cache) {
      this.cache[key].value = value;
  }
}

var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
}

DoublyLinkedList.prototype.setHeadTo = function(node) {
  if (this.head === node) {
      return;
  }   else if (this.head === null) {
      this.head = node;
      this.tail = node;
  }   else if (this.head === this.tail) {
      this.tail.prev = node;
      this.head = node;
      this.head.next = this.tail;
  }   else {
      if (this.tail === node) this.removeTail();
      node.removeBindings();
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
  }
}

DoublyLinkedList.prototype.removeTail = function() {
  if (this.tail === null) return;
  if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      return;
  }
  this.tail = this.tail.prev;
  this.tail.next = null;
}

var DoublyLinkedListNode = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

DoublyLinkedListNode.prototype.removeBindings = function() {
  if (this.prev !== null) {
      this.prev.next = this.next;
  }
  if (this.next !== null) {
      this.next.prev = this.prev;
  }
  this.prev = null;
  this.next = null;
}



/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/