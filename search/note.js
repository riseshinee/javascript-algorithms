/**
 * 선형검색
 * : 배열의 각 항목을 한 인덱스씩 순차적으로 접근, 시간복잡도 O(n)
 * 
 * 이진검색
 * : 정렬된 자료에 사용할 수 있는 검색 알고리즘, 중간값을 확인하여 원하는 값보다 해당 중간값이 큰지 작은지 확인한다.
 */

function binarySearch(array,n){
  let lowIndex = 0, highIndex = array.length-1;

  while(lowIndex <= highIndex){
    let midIndex = Math.floor((highIndex+lowIndex)/2);
    if(array[midIndex]==n){
      return midIndex;
    }else if(n>array[midIndex]){
      lowIndex = midIndex;
    }else{
      highIndex = midIndex;
    }
  }
  return -1;
}