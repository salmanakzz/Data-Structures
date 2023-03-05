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

  bfs(start){
    let queue = [start]
    let visited = new Set()
    visited.add(visited)

    while (queue.length >0) {
      let vertex = queue.shift()
      console.log(vertex);
      for (const val of this.map.get(vertex)) {
        if (!visited.has(val)) {
          visited.add(val)
          queue.push(val)
        }
      }
    }
  }

  dfs(start){
    let visited = new Set()
    this.dfsHelper(start,visited)
  }
  dfsHelper(vertex, visited){
    visited.add(vertex)
    console.log(vertex);
    for (const val of this.map.get(vertex)) {
      if (!visited.has(val)) {
        this.dfsHelper(val,visited)
      }
    }
    this.map.forEach((val,key) => {
      if(!visited.has(key)){
        this.dfsHelper(key,visited)
      }
    });
  }
}


const graph = new Graph()
graph.insert(3,5,true)
graph.insert(3,4,true)
graph.insert(5,6,false)
graph.display()