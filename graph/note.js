function UndirectedGraph(){
    this.edges = {};
}

UndirectedGraph.prototype.addVertex = function (vertex){
    this.edges[vertex] = {};
}

UndirectedGraph.prototype.addEdge = function (vertex1, vertex2, weight){
    if(weight == undefined){
        weight = 0;
    }
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}
