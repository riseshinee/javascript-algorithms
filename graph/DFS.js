/**
 * 깊이 우선 검색 (DFS): 그래프에서 다른 연결을 방문하기 전에 하나의 연결을 깊게 파고들며 순회하는 검색 알고리즘
 */

DirectedGraph.prototype.traverseDFS = function (vertex, fn){
    let visited = {};
    this._traverseDFS(vertex, visited, fn);
}