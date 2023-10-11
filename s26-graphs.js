// an example using airline flights between cities
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  log() {
    console.log(this.adjacencyList)
  }

  #edgeErrorHandling(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      console.log('One or two of those vertex do not exist')
      return undefined
    }
  }

  addVertex(val) {
    if (!this.adjacencyList[val])
      this.adjacencyList[val] = []
  }

  addEdge(vertex1, vertex2) {
    this.#edgeErrorHandling(vertex1, vertex2)
    // assuming an undirected graph, i.e. flights go both ways
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.#edgeErrorHandling(vertex1, vertex2)
    this.adjacencyList[vertex1].forEach((vertex, index) => {
      if (vertex === vertex2)
        this.adjacencyList[vertex1].splice(index, 1)
    })
    this.adjacencyList[vertex2].forEach((vertex, index) => {
      if (vertex === vertex1)
        this.adjacencyList[vertex2].splice(index, 1)
    })
  }

  removeVertex(val) {
    // remove edges
    this.adjacencyList[val].forEach((edge) => {
      this.removeEdge(val, edge)
    })
    // remove actual vertex
    if (this.adjacencyList[val])
      delete this.adjacencyList[val]
  }
}

const g = new Graph()
g.addVertex('Tokyo')
g.addVertex('Perth')
g.addVertex('Berlin')
g.addEdge('Tokyo', 'Perth')
g.addEdge('Berlin', 'Perth')
g.log()
g.removeEdge('Tokyo', 'Perth')
g.removeVertex('Berlin')
g.log()


// [1, 0, 0, 0, -1, 0, 100]
//           0      1  2 