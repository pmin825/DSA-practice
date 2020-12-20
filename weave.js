function weave(sourceOne, sourceTwo) {
    let q = new Queue();
    while (sourceOne.peek() && sourceTwo.peek()) {
        if (sourceOne.peek()) q.add(sourceOne.remove());
        if (sourceTwo.peek()) q.add(sourceTwo.remove());
    }
    return q;
}

// You should not need to make any changes to this class
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}