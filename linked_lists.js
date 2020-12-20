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
}