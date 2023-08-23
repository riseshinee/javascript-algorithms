/**
 * 빠른선택: 정렬되지 않은 목록에서 k번째로 작은 항목을 찾는 선택 알고리즘
 * 시간복잡도: O(n)
 * @param A
 * @param l
 * @param h
 * @param k
 * @returns {*}
 */
function quickSelectInPlace(A, l, h, k){
    let p = partition(A, l, h);
    if(p==(k-1)){
        return A[p];
    }else if(p>(k-1)){
        return quickSelectInPlace(A, l, p -1, k);
    }else{
        return quickSelectInPlace(A, p+1, h, k);
    }
}
function partition(array, left, right){
    let pivot = array[Math.floor((right+left)/2)]; //기준점 선택
    while ( left <= right ){
        while (pivot > array[left]){ //기준점보다 작을때 오른쪽으로 이동
            left++;
        }
        while (pivot > array[right]){ //기준점보다 작을 때 왼쪽으로 이동
            right--;
        }
        if(left <= right ){
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

/**
 * 배열의 중간값 찾기
 * @param array
 * @returns {*}
 */
function medianQuickSelect(array){
    return quickSelectInPlace(array, 0 , array.length-1, Math.floor(array.length/2))
}

