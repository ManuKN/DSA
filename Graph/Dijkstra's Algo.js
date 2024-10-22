class WeightGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1] = { node: vertex2, weight };
    this.adjacencyList[vertex2] = { node: vertex1, weight };
  }
}

let weightedGraph = new WeightGraph();

weightedGraph.addVertex("A")
weightedGraph.addVertex('B')
weightedGraph.addVertex('C')
weightedGraph.addEdge("A" ,"B" , 10);
weightedGraph.addEdge("A" , "C" ,9);
console.log(weightedGraph)

