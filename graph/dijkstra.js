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

