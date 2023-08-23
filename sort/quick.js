/**
 * 빠른정렬: 기준점을 획득한 다음 해당 기준점을 기준으로 배열을 나눔, 한쪽은 기준보다 크고, 한쪽은 기준보다 작음, 이 방법을 계속 반복
 * @param {*} items 
 * @returns 
 */
function quickSort(items){
  return quickSortHelper(items, 0, items.length-1);
}

function quickSortHelper(items, left, right){
  let index;
  if(items.length > 1){
    index = partition(items, left, right);
    if( left < index - 1){
      quickSortHelper(items, left, index-1);
    }
    if( index < right ){
      quickSortHelper(items, index, right);
    }
  }
  return items;
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
