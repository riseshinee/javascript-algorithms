function _isEmpty(obj){
    return object.keys(obj).length === 0;
}

function _extractMin(q,dist){
    let minimumDistance = Infinity,
        nodeWithMinimumDistance = null;
    for(let node in q){
        if(dist[node] <= minimumDistance){
            minimumDistance = dist[node];
            nodeWithMinimumDistance = node;
        }
    }
    return nodeWithMinimumDistance;
}

/**
 * 디익스트라 알고리즘 : 루푸를 순회할 때 각 노드에 대한 최단 경로 선택, BFS 사용
 * @param source
 * @returns {{}}
 * @constructor
 */
DirectedGraph.prototype.Dijkstra = function (source){
    let q = {}, dist = {};
    for (let vertex in this.edges){
        //모르는 거리는 무한으로 설정
        dis[vertex] = Infinity;
        //v를 Q에 추가
        Q[vertex] = this.edges[vertex];
    }
    //출발점에서 출발점까지의 거리를 0으로 설정
    dist[source] = 0;

    while (!_isEmpty(q)){
        let u = _extractMin(q,dist); //최소 거리

        delete q[u];

        for (let neighbor in this.edges[u]){
            //현재거리
            let alt = dist[u] + this.edges[u][neighbor];
            
            if(alt<dist[neighbor]){
                dist[neighbor] = alt;
            }
        }
    }
    return dist;
}