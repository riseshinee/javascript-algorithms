/**
 * 십진수를 이진수로 변환하기
 * :십진수를 이진수로 변환하기 위해서는 숫자를 계속해서 2로 나누고 매번 나머지와 나눗셈을 계산해야 함
 */

function base10ToString(n){
  let binaryString = "";

  function base10ToStringHelper(n){
    if(n<2){
      binaryString += n;
      return;
    }else{
      base10ToStringHelper(Math.floor(n/2));
      base10ToStringHelper(n%2);
    }
  }
  base10ToStringHelper(n);

  return binaryString;
}

console.log(base10ToString(232));