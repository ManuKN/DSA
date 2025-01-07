//Stack using queue (2 queue);

class MyStack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    // Add the element to the queue
    this.queue.push(x);

    // Rotate the queue to ensure the last element is at the front
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    // Pop the front element of the queue
    return this.queue.shift();
  }

  top() {
    // Peek at the front element of the queue
    return this.queue[0];
  }

  empty() {
    // Check if the queue is empty
    return this.queue.length === 0;
  }
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.empty());

//Stack using queue(1 queue)

class MyStack2 {
  constructor() {
    this.Queue1 = [];
    this.Queue2 = [];
  }
  push(x) {
    this.Queue2.push(x);

    //add all the elements in the queue1 to queue2
    while (this.Queue1.length > 0) {
      this.Queue2.push(this.Queue1.shift());
    }


    //swap queue2 to queue1
    [this.Queue1, this.Queue2] = [this.Queue2, this.Queue1];
  }


  //remove first element in queue 1
  pop() {
    return this.Queue1.shift();
  }


  //show first element in queue1
  top() {
    return this.Queue1[0];
  }

  empty() {
    return this.Queue1.length === 0;
  }
}


const stack2 = new MyStack2();
stack2.push(1);
stack2.push(4);
console.log(stack2.top());
console.log(stack2.pop());
console.log(stack2.empty());
console.log(stack2.pop());
console.log(stack2.empty());
