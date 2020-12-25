function levelWidth(root) {
    let widths = [0];
    let arr = [root, 's'];
    
    while (arr.length > 1) {
        let node = arr.shift();
        if (node === 's') {
            widths.push(0);
            arr.push('s')
        }   else {
            arr.push(...node.children);
            widths[widths.length - 1]++;
        }
    }
    return widths;
}

// You shouldn't need to modify this class
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
}
