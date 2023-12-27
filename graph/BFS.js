/**
 * 너비 우선 검색 (BFS): 그래프에서 연결된 노드와 해당 노드들 간의 간선을 순서대로 검색하는 알고리즘
 * queue를 사용한다.
 */

DirectedGraph.prototype.traverseBFS = function (vertex, fn){
    let queue = [], visited = {};
    queue.push(vertex);

    while (queue.length){
        vertex = queue.shift();
        if(!visited[vertex]){
            visited[vertex] = true;
            fn(vertex);
            for(let adjacentVertex in this.edges[vertex]){
                queue.push(adjacentVertex);
            }
        }
    }
}