// the rules of MaxBinaryHeap is to have a parent node to be the greater value then the child node
// Adding child node should be also starts from left
class WeightGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(startVertex, endVertex) {
    const nodes = new priorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let smallest;
    distances[startVertex] = 0;
    nodes.Enqueue(startVertex, 0);
    for (let key in this.adjacencyList) {
      previous[key] = null;
      if (key != startVertex) {
        distances[key] = Infinity;
        nodes.Enqueue(key, Infinity);
      }
    }
    while (nodes.values.length) {
      smallest = nodes.Dequeue().value;
      if (smallest === endVertex) {
        //we r done
        //Build up path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      console.log(this.adjacencyList);
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighbor node
          let nextNode = this.adjacencyList[smallest][neighbor];
          console.log(nextNode);
          //calculating  new distance for the neighbor node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.Enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}


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


let weightedGraph = new WeightGraph();
let priorityqueue = new priorityQueue();

weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');
weightedGraph.addVertex('D');
weightedGraph.addVertex('E');
weightedGraph.addVertex('F');
weightedGraph.addEdge('A', 'B', 4);
weightedGraph.addEdge('A', 'C', 2);
weightedGraph.addEdge('B', 'E', 3);
weightedGraph.addEdge('C', 'D', 2);
weightedGraph.addEdge('C', 'F', 4);
weightedGraph.addEdge('D', 'E', 3);
weightedGraph.addEdge('D', 'F', 1);
weightedGraph.addEdge('E', 'F', 1);
console.log(weightedGraph);

console.log(weightedGraph.dijkstra('A', 'E'));