class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //this is undirectional graph
  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return 'No vertex found';
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return 'No vertex found';
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (data) => data !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (data) => data !== vertex1
    );
  }

  removeVertex(vertex) {
    for (let elements of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, elements);
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursion(start) {
    let List = [];
    let Store = {};
    const adjacencyList = this.adjacencyList;
    (function DFS(vertex) {
      if (!vertex) return 'Empty';
      Store[vertex] = true;
      List.push(vertex);
      adjacencyList[vertex].forEach((element) => {
        if (!Store[element]) {
          return DFS(element);
        }
      });
    })(start);
    return List;
  }

  DFSIterative(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          stack.push(element);
        }
      });
    }
    return result;
  }

  BFSIterative(start) {
    let Queue = [start];
    let result = [];
    let visited = {};
    let currentVertex;

    visited[start] = true;
    while (Queue.length) {
      currentVertex = Queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          Queue.push(element);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
console.log(graph);

console.log(graph.DFSRecursion('A'));
console.log(graph.DFSIterative('A'));
console.log(graph.BFSIterative('A'));
