/*
두개의 정렬된 배열이 동일한 크기일 때
해당 배열들의 중앙값 찾기
*/
function medianOfArray(array){
    let length = array.length;

    if( length%2 === 1){
        return array[Math.floor(length/2)];
    }else{
        return( array[length/2]+array[length/2-1])/2;
    }
}