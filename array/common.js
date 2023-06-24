/**
 * k개의 정렬된 배열에서 공통항목 찾기
 * hashmap이라는 빈 객체, last 변수, answer 배열을 선언합니다.
 * kArray 배열을 반복하면서 각 하위 배열을 가져옵니다.
 * last 변수를 null로 초기화합니다.
 * 각 하위 배열을 반복하면서 요소를 가져옵니다.
 * 현재 요소와 이전 요소(last)가 같지 않을 경우에만 다음을 수행합니다.
 * hashmap 객체에 현재 요소가 존재하지 않으면, 해당 요소를 키로 가지는 속성을 생성하고 값을 1로 설정합니다. 이미 존재하는 경우 값에 1을 더합니다.
 * last 변수를 현재 요소로 업데이트합니다.
 * hashmap 객체를 순회하면서 값이 kArray의 길이와 동일한 요소를 찾습니다.
 * 해당 요소를 정수로 변환하여 answer 배열에 추가합니다.
 * answer 배열을 반환합니다.
 * 시간복잡도: O(kn)
 * @param {} kArray 
 * @returns 
 */
function commonElements(kArray){
  let hashmap = {}, last, answer = [];

  for( let i = 0, kArrayLength = kArray.length; i < kArrayLength; i++){
    let currentArray = kArray[i];
    let last = null;
      for(let j = 0, currentArrayLen = currentArray.length; j < currentArrayLen; j++){
        let currentElement = currentArray[j];
        if(last != currentElement){
          if(!hashmap[currentElement]){
            hashmap[currentElement] = 1;
          }else{
            hashmap[currentElement]++;
          }
        }
        last = currentElement;
      }
  }

  for( let prop in hashmap){
    if(hashmap[prop] == kArray.length){
      answer.push(parseInt(prop))
    }
  }
  return answer;
}
commonElements([[1,2,3],[1,2,3,4],[1,2]])