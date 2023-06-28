/**
 * 연속되는 수
 * 주어진 배열의 숫자 순서가 연속적인지 아닌지 판별하기
 * @param {*} l 
 * @returns 
 */
function sol(l){
  l.sort((a,b) => {
    return a-b;
  });

  for (let i=0; i<l.length-1; i++){
    if(l[i]+1 !== l[i+1]){
      return 'NO';
    }
  }
  return 'YES';
}

const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));

console.log(sol(n));

/**
 * 입력1
 * 1 2 3 4 5
 * 출력1
 * YES
 *
 * 입력2
 * 1 4 2 6 3
 * 출력2
 * NO
 */