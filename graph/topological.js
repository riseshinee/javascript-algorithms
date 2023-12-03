DirectedGraph.prototype.topologicalSortUtil = function (v, visited, stack){
    visited.add(v);

    for (let item in this.edges[v]){
        if(visited.has[item] === false){
            this.topologicalSortUtil(item, visited, stack)
        }
    }
    stack.unshift(v);
};

DirectedGraph.prototype.topologicalSort = function (){
    let visited = {}, stack = [];

    for (let item in this.edges){
        if(visited.has(item) === false){
            this.topologicalSortUtil(item, visited, stack);
        }
    }
    return stack;
}

