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
    nodes.enqueue(startVertex, 0);
    for (let key in this.adjacencyList) {
      previous[key] = null;
      if (key != startVertex) {
        distances[key] = Infinity;
        nodes.enqueue(key, Infinity);
      }
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
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
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

//the time complexity of this priority queue will be O(N logN) because the of sort that we do on each addition of element to the array
class priorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

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
