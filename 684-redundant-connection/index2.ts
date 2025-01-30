class UndirectedGraph<T> {
    private adjacencyList: Map<T, Set<T>>;
  
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addNode(node: T): void {
      if (!this.adjacencyList.has(node)) {
        this.adjacencyList.set(node, new Set());
      }
    }
  
    addEdge(node1: T, node2: T): void {
      if (!this.adjacencyList.has(node1)) {
        this.addNode(node1);
      }
      if (!this.adjacencyList.has(node2)) {
        this.addNode(node2);
      }
      this.adjacencyList.get(node1)!.add(node2);
      this.adjacencyList.get(node2)!.add(node1);
    }
  
    removeEdge(node1: T, node2: T): void {
      this.adjacencyList.get(node1)?.delete(node2);
      this.adjacencyList.get(node2)?.delete(node1);
    }
  
    removenode(node: T): void {
      if (!this.adjacencyList.has(node)) return;
      for (const neighbor of this.adjacencyList.get(node)!) {
        this.adjacencyList.get(neighbor)!.delete(node);
      }
      this.adjacencyList.delete(node);
    }
  
    printGraph(): void {
      for (const [node, neighbors] of this.adjacencyList.entries()) {
        console.log(`${node} -> ${Array.from(neighbors).join(', ')}`);
      }
    }
  }
  
  // Example usage:
  const graph = new UndirectedGraph<number>();
  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  graph.printGraph();
