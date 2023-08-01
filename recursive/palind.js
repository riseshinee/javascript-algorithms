/**
 * 문자열이 거꾸로 읽어도 동일한지 여부를 재귀적으로 결정하는 프로그램 작성하기
 * 시간복잡도: o(n)
 */

function isPalindromeRecursive(word){
  return isPalindromeHelper(word, 0, word.length-1);
}

function isPalindromeHelper(word, beginPos, endPos){
  if(beginPos >= endPos){
    console.log('true');
    return true;
  }
  if(word.charAt(beginPos) != word.charAt(endPos)){
    console.log('false');
    return false;
  }else{
    isPalindromeHelper(word, beginPos+1, endPos-1)
  }
}

isPalindromeRecursive('racecar');

