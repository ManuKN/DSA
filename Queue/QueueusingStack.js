//IMplement stack using Queue (2 stack)

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(x) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack2.push(x);

    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  pop() {
    return this.stack1.pop();
  }

  peek() {
    return this.stack1[this.stack1.length - 1];
  }

  empty() {
    return this.stack1.length === 0;
  }
}

const Queue = new MyQueue();
Queue.push(2);
Queue.push(4);
console.log(Queue);
console.log(Queue.pop());
console.log(Queue.empty());
console.log(Queue.pop());
console.log(Queue.empty());
