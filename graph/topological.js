DirectedGraph.prototype.topologicalSortUtil = function (v, visited, stack){
    visited.add(v);

    for (let item in this.edges[v]){
        if(visited.has[item] === false){
            this.topologicalSortUtil(item, visited, stack)
        }
    }
    stack.unshift(v);
};
/**
 * 위상정렬: 순서를 기록하기 위해 스택을 사용하는 DFS, 방문한 노드 집합을 가지고 있어야 함
 * @returns {*[]}
 */
DirectedGraph.prototype.topologicalSort = function (){
    let visited = {}, // 방문한 노드 집합
        stack = [];

    for (let item in this.edges){
        if(visited.has(item) === false){
            this.topologicalSortUtil(item, visited, stack);
        }
    }
    return stack;
}

