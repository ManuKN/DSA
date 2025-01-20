//Queue using LinkedList approach
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.Length = 5;
  }

  Enqueue(x) {
    const newNode = new Node(x);
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

  DeQueue() {
    if (!this.size) {
      return -1;
    } else {
      const removedNode = this.first;
      this.first = this.first.next;
      this.size--;
      return removedNode.val;
    }
  }

  Front() {
    if (!this.size) {
      return -1;
    } else {
      return this.first.val;
    }
  }

  Rear() {
    if (!this.size) {
      return -1;
    } else {
      return this.last.val;
    }
  }

  isEmpty() {
    if (!this.size) {
      return true;
    } else return false;
  }

  isFull() {
    if (this.size === this.Length) {
      return true;
    } else {
      return false;
    }
  }
}

const queue = new Queue();

queue.Enqueue(5);
queue.Enqueue(6);
queue.Enqueue(8);
queue.Enqueue(9);
console.log(queue);
console.log(queue.Front());

//Circular Queue using Array

class CircularQueue {
  Constructor(k) {
    this.queue = new Array(k);
    this.size = 0;
    this.front = 0;
    this.rear = -1;
    this.capacity = k;
  }

  Enqueue(x) {
    if (this.isFull) {
      return false;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = x;
    this.size++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }
    const removedElement = this.queue[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return removedElement;
  }

  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }

  Rear(){
    return this.isEmpty() ? -1 : this.queue[this.rear]
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}


const circularQueue = new CircularQueue(5);
circularQueue.Enqueue(4);
circularQueue.Enqueue(5);
circularQueue.Enqueue(6);
circularQueue.Enqueue(7);
console.log(circularQueue.isFull())