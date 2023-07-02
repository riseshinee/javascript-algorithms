/**
 * 기저조건 (종료조건)
 * :재귀 메소드는 자기 자신을 호출하기 때문에 기저 조건이 있어야지
 * 메소드 호출이 중단됨
 * 
 * 분할 정복 방식
 * : 어떤 문제를 작은 단위로 나눠서 해당 작은 단위의 문제들을 모두 해결함으로써 문제를 해결하는 것
 * ex) 피보나치 수열
 */

/**
 * 피보나치 수열
 * 재귀법을 적용하지 않음
 * @param {*} n 
 * @returns 
 */
function getNthFibo1(n){
  if( n <= 1) return n;
 
  let sum = 0, last = 1, lastlast = 0;

  for(let i = 1; i < n; i++){
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }

  return sum;
}

/**
 * 재귀법을 적용한 피보나치 수열
 * 시간복잡도 O(2^n)
 * @param {*} n 
 * @returns 
 */
function getNthFibo2(n){
  if( n <= 1){
    return n;
  }else{
    return getNthFibo2(n-1) + getNthFibo2(n-2)
  }


}