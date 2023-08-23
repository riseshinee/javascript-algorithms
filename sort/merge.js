/**
 * 병합정렬: 각 하위 배열에 하나의 항목이 존재할 때까지 배열을 하위 배열로 나눈 뒤 병합
 * 시간복잡도: O(nlog2(n))
 * @param leftA
 * @param rightA
 * @returns {*[]}
 */
function merge(leftA, rightA){
    let results=[], leftIndex=0, rightIndex=0;

    while(leftIndex < leftA.length && rightIndex < rightA.length){
        if( leftA[leftIndex] < rightA[rightIndex]){
            results.push(leftA[leftIndex++]);
        }else{
            results.push(rightA[rightIndex++]);
        }
    }
    let leftRemains = leftA.slice(leftIndex),
        rightRemains = rightA.slice(rightIndex);

    return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array){
    if(array.length<2){
        return array;
    }

    let midpoint = Math.floor((array.length)/2),
        leftArray = array.slice(0,midpoint),
        rightArray = array.slice(midpoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}