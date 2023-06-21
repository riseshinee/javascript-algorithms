/**
 * 정렬된 특정 배열의 중앙값 찾기
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


/**
 * 두개의 정렬된 배열이 동일한 크기일 때 해당 배열들의 중앙값 찾기 
 * @param {*} arr1 
 * @param {*} arr2 
 * @param {*} pos 배열의 크기가 짝수인지 홀수인지 확인하기 위한 변수
 * @returns 
 */
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
/**
 * 분할 정복(Divide and Conquer) 알고리즘
 * pos가 0 이하일 경우 -1을 반환합니다. 이는 잘못된 입력 값이 주어진 경우를 처리하는 부분입니다.
 * pos가 1인 경우, 두 배열의 첫 번째 요소들의 평균값을 반환합니다.
 * pos가 2인 경우, 두 배열의 첫 번째 요소 중 작은 값과 큰 값을 더한 후 2로 나눈 값을 반환합니다.
 * 위의 예외 상황을 처리한 후, 두 배열의 중간 값을 찾기 위해 medianOfArray 함수를 호출하여 arr1과 arr2의 중간값(median1, median2)을 구합니다.
 * 만약 median1과 median2가 같은 경우, 두 값 중 아무 값을 반환합니다. (이는 두 배열의 크기가 같을 때, 중간 값이 동일한 경우를 처리하는 부분입니다.)
 * pos가 짝수인 경우 (pos % 2 == 0), evenOffset 변수에 1을 할당하고, 홀수인 경우 0을 할당합니다.
 * offsetMinus 변수에 pos를 2로 나눈 몫에서 evenOffset을 뺀 값을 할당합니다.
 * offsetPlus 변수에 pos를 2로 나눈 몫에 evenOffset을 더한 값을 할당합니다.
 * median1이 median2보다 작은 경우, arr1과 arr2를 잘라서 offsetMinus 위치부터 끝까지를 인자로 하여 재귀적으로 medianOfTwoSortedArray 함수를 호출합니다.
 * median1이 median2보다 큰 경우, arr2와 arr1을 잘라서 offsetMinus 위치부터 끝까지를 인자로 하여 재귀적으로 medianOfTwoSortedArray 함수를 호출합니다.
 * 재귀 호출된 결과를 반환합니다.
 */