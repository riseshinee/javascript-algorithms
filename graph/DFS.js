/**
 * 깊이 우선 검색 (DFS): 그래프에서 다른 연결을 방문하기 전에 하나의 연결을 깊게 파고들며 순회하는 검색 알고리즘
 * 재귀를 사용, 항상 첫번째 이웃 노드를 재귀적으로 방문
 */

DirectedGraph.prototype.traverseDFS = function (vertex, fn){
    let visited = {};
    this._traverseDFS(vertex, visited, fn);
}

DirectedGraph.prototype._traverseDFS = function (vertex, viisitd, fn){
    viisitd[vertex] = true;
    fn(vertex);
    for(let adjacentVertex in this.edges[vertex]){
        if(!viisitd[adjacentVertex]){
            this._traverseDFS(adjacentVertex,viisitd,fn)
        }
    }
}