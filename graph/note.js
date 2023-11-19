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

/**
 * 간선과 정점 삭제
 * @param vertex1
 * @param vertex2
 */
UndirectedGraph.prototype.removeEdge = function (vertex1, vertex2){
    if(this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined){
        delete this.edges[vertex1][vertex2];
    }
    if(this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined){
        delete this.edges[vertex2][vertex1]
    }
}

/**
 * 전체 정점 삭제
 * @param vertex
 */
UndirectedGraph.prototype.removeVertex = function (vertex){
    for(let adjacentVertex in this.edges[vertex]){
        this.removeEdge(adjacentVertex,vertex);
    }
    delete this.edges[vertex];
}

/**
 * 지향성 그래프
 * @constructor
 */
function DirectedGraph(){
    this.edges = {};
}

DirectedGraph.prototype.addVertex = function (vertex){
    this.edges[vertex] = {};
}

DirectedGraph.prototype.addEdge = function (origVertex, destVertex, weight){
    if(weight === undefined){
        weight = 0;
    }
    this.edges[origVertex][destVertex] = weight;
}

DirectedGraph.prototype.removeEdge = function (origVertex, destVertex){
    if(this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined){
        delete this.edges[origVertex][destVertex];
    }
}

DirectedGraph.prototype.removeVertex = function (vertex){
    for(let adjacentVertex in this.edges[vertex]){
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
}