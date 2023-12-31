/**
 * Set
 * 
 * 삽입
 * 특징: 원소의 유일함을 확인할 수 있음 (중복이 허용되지 않음, 시간복잡도 O(1))
 * 
 * 삭제
 * 특징: 결과값으로 Boolean을 Return (시간복잡도 O(1))
 * 
 * 포함
 * 특징: 결과값으로 Boolean을 Return (시간복잡도 O(1))
 * 
 */

let set = new Set();

set.add(1);
set.delete(1); //true
set.add(2);
set.has(2); //true

/**
 * 교집합 
 */
function intersectSets(a,b){
  let intersection = new Set();
  for(let el of b){
    if(a.has(el)){
      intersection.add(el)
    }

    return intersection;
  }
}

/**
 * 상위 집합 여부 확인
 */
function isSuperset(a,b){
  for(let el of subSet){
    if(!a.has(el)){
      return false;
    }
  }
  return true;
}

/**
 * 합집합
 */
function unionSet(a,b){
  let union = new Set(a);
  for(let el of b){
    union.add(el);
  }
  return union;
}

/**
 * 차집합
 */
function diffSet(a,b){
  let diff = new Set(a);
  for(let el of b){
    diff.delete(el);
  }
  return diff;
}