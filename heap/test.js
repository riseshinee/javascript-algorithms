/**
 * 배열에서 k번째로 가장 작은 값 찾기
 * 최소 힙의 성질을 이용한다.
 * @param array
 * @param k
 * @returns {*}
 */
let array1 = [12, 3, 13, 4, 2, 40, 23];
function getKthSmallestElement(array,k){
    let minH = new MinHeap();
    for(let i=0;, arrayLength = array.length; i<arrayLength; i++){
        minH.add(array[i]);
    }
    for (let i=1; i<k; i++){
        minH.poll();
    }
    return minH.poll();
}

/**
 * 배열에서 K번째로 가장 큰 값 찾기
 * 최대 힙의 성질을 이용한다.
 * @param array
 * @param k
 * @returns {*}
 */
function getKthBiggestElement(array, k){
    let maxH = new MaxHeap();
    for( let i=0; arrayLength=array.length; i<arrayLength; i++){
        maxH.push(array[i]);
    }
    for(let i=1; i<k; i++){
        maxH.pop();
    }
    return maxH.pop();
}
