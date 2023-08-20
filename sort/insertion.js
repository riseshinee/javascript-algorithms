
/**
 * 삽입정렬: 배열을 순차적으로 검색하면서 정렬되지 않은 항목들을 배열의 왼쪽의 정렬된 부분으로 이동시킴
 * 시간복잡도: O(n^2)
 * @param {*} items 
 * @returns 
 */
function insertionSort(items){
  let len = items.length,
  value, //현재 비교중인 값
  i, //정렬되지 않은 부분의 인덱스
  j; //정렬된 부분의 인덱스

  for(i=0; i<len; i++){
    //현재 값 저장
    value = items[i];

    /**
     * 정렬된 부분의 값이 정렬되지 않은 부분의 값보다 큰 경우
     * 정렬된 부분의 모든 항목을 하나씩 이동
     */
    for(j=i-1; j > -1 && items[j] > value; j--){
      items[j+1] = items[j];
    }
    items[j+1] = value;

  }
  return items;
}