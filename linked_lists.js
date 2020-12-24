class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    
    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    
    size(){
        let currentNode = this.head
        let count = 0;
        while (currentNode) {
            count += 1;
            currentNode = currentNode.next;
        }
        return count;
    }
    
    getFirst(){
        return this.head;
    }
    
    getLast(){
        let node = this.head;
        while(node){
            if(node.next === null) return node;
            node = node.next;
        }
    }
    
    clear(){
        this.head = null;
    }
    
    removeFirst(){
        this.head = this.head.next;
    }
    
    removeLast(){
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = this.head;
        let node = this.head.next;
        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }
    
    insertLast(data) {
        const last = this.getLast();
        if (last) {
            last.next = new Node(data)
        }   else {
            this.head = new Node(data)
        }
    }
    
    getAt(index) {
        let count = 0;
        let node = this.head
        while (node) {
            if (count === index) return node;
            count++
            node = node.next
        }
        return null;
    }
    
    removeAt(index) {
        if (!this.head) return;
        if (index === 0) this.head = this.head.next;
        
        let prevNode = this.getAt(index - 1);
        if (!prevNode || !prevNode.next) return;
        prevNode.next = prevNode.next.next;
    }
    
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }
        if (index === 0) {
            this.head = new Node(data, this.head)
        }
       
        const prevNode = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prevNode.next);
        prevNode.next = node;
    }
    
    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++
        }
    }
    
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
    
    
}