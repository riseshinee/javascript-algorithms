/*
두개의 정렬된 배열이 동일한 크기일 때
해당 배열들의 중앙값 찾기
*/

function medianOfArray(array){
    let length = array.length;

    //배열의 길이가 홀수 일 때
    if(length%2 == 1){
        //중앙값
        return array[Math.floor(length/2)];
    }else{
        //배열의 길이가 짝수일 때
        return (array[length/2] + array[length/2-1])/2;
    }
}
function medianOfTowSortedArray(arr1, arr2, pos){
    if(pos <= 0){
        return -1;
    }
    if(pos == 1){
        return (arr1[0]+ arr2[0])/2;
    }
    if(pos == 2){
        return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[0],arr2[0]))/2;
    }

    let median1 = medianOfArray(arr1);
    let median2 = medianOfArray(arr2);

    if( median1 == median2){
        return median1;
    }

    let evenOffset = pos%2 == 0 ? 1:0;
    let offsetMinus = Math.floor(pos/2) - evenOffset;
    let offsetPlus = Math.floor(pos/2) + evenOffset;

    if( median1 < median2){
        return medianOfTowSortedArray(arr1.slice(offsetMinus), arr2.slice(offsetMinus), offsetPlus);
    }else{
        return medianOfTowSortedArray(arr2.slice(offsetMinus), arr1.slice(offsetMinus), offsetPlus);
    }

}