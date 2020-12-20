class Queue {
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }
    
    add(value){
        this.first.push(value);
    }
    
    remove(){
        while (this.first.peek()){
            this.second.push(this.first.pop());
        }
        let removed = this.second.pop();
        while (this.second.peek()){
            this.first.push(this.second.pop());
        }
        return removed;
    }
    
    peek(){
        while (this.first.peek()){
            this.second.push(this.first.pop());
        }   
        let value = this.second.peek();
        while (this.second.peek()){
            this.first.push(this.second.pop())
        }
        return value;
    }
}