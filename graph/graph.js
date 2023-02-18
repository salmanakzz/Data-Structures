class Graph {
  constructor() {
    this.map = new Map();
  }
  insert(vertex, edge, isBidirectional) {
    let map = this.map;
    if (!map.has(vertex)) {
      this.add(vertex);
    }
    if (!map.has(edge)) {
      this.add(edge);
    }

    map.get(vertex).push(edge);
    if (isBidirectional) {
      map.get(edge).push(vertex);
    }
  }
  add(data) {
    this.map.set(data, []);
  }

  display(){
    let map = this.map

    console.log(map);
  }
}


const graph = new Graph()
graph.insert(3,5,true)
graph.insert(3,4,true)
graph.insert(5,6,false)
graph.display()