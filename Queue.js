class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//this Queue implemented by single linked list😉😉😁

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  Enqueue(val) {
    let newNode = new Node(val);
    if (!this.size || !this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  Dequeue() {
    if (!this.size || !this.first) return null;
    let removedNode = this.first;
    if (!this.size === 0) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
      this.first.next = null;
    }
    this.size--;
    return removedNode.val;
  }
}

let queue = new Queue();
console.log(queue.Enqueue(4));
console.log(queue.Enqueue(6));
console.log(queue.Enqueue(8));

console.log(queue);

console.log(queue.Dequeue())
console.log(queue.Dequeue());

