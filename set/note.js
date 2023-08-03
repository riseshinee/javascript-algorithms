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
