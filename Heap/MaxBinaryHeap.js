// the rules of MaxBinaryHeap is to have a parent node to be the greater value then the child node
// Adding child node should be also starts from left
class Node {
  constructor(val, priority) {
    this.value = val;
    this.Priority = priority;
  }
}
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  Swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  Insert(val) {
    this.values.push(val);
    let childIndex = this.values.length - 1;
    let child = this.values[childIndex];
    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (child <= parent) break;
      this.Swap(parentIndex, childIndex);
      childIndex = parentIndex;
    }
    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();
    this.Swap(0, this.values.length - 1);
    let removedNode = this.values.pop();
    let parentIndex = 0;
    let left = 2 * parentIndex + 1;
    let right = 2 * parentIndex + 2;
    while (left < this.values.length) {
      let largestIndex = left;
      if (
        right < this.values.length &&
        this.values[right] > this.values[left]
      ) {
        largestIndex = right;
      }
      if (this.values[parentIndex] >= this.values[largestIndex]) break;
      this.Swap(parentIndex, largestIndex);
      parentIndex = largestIndex;
      left = 2 * parentIndex + 1;
      right = 2 * parentIndex + 2;
    }
    return removedNode;
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }

  Swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  Enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    let childIndex = this.values.length - 1;
    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      if (this.values[parentIndex].Priority <= this.values[childIndex].Priority)
        break;
      this.Swap(childIndex, parentIndex);
      childIndex = parentIndex;
    }
    return this.values;
  }

  Dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();
    let removedNode = this.values.shift();
    let parentIndex = 0;
    let left = 2 * parentIndex + 1;
    let right = 2 * parentIndex + 2;
    while (left < this.values.length) {
      let highPriority = left;
      if (
        right < this.values.length &&
        this.values[highPriority].Priority > this.values[right].Priority
      ) {
        highPriority = right;
      }

      if (
        this.values[parentIndex].Priority < this.values[highPriority].Priority
      )
        break;
      this.Swap(highPriority, parentIndex);
      parentIndex = highPriority;
      left = parentIndex * 2 + 1;
      right = parentIndex * 2 + 2;
    }
    return removedNode;
  }
}

let MaxHeap = new MaxBinaryHeap();

console.log(MaxHeap.Insert(4));
console.log(MaxHeap.Insert(5));
console.log(MaxHeap.Insert(6));
console.log(MaxHeap.Insert(7));
console.log(MaxHeap.Insert(8));
console.log(MaxHeap.Insert(9));
console.log(MaxHeap.Insert(10));
console.log(MaxHeap.Insert(12));

console.log(MaxHeap.extractMax());
console.log(MaxHeap);
console.log(MaxHeap.extractMax());
console.log(MaxHeap);

let prioQueue = new priorityQueue();
console.log(prioQueue.Enqueue("Manu", 1));
console.log(prioQueue.Enqueue("Manoj", 3));
console.log(prioQueue.Enqueue("Mithun", 2));
console.log(prioQueue.Enqueue('Manohar', 1));

console.log(prioQueue.Dequeue());
console.log(prioQueue)
