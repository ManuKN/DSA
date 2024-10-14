// the rules of MaxBinaryHeap is to have a parent node to be the greater value then the child node
// Adding child node should be also starts from left

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
