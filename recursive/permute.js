/**
 * 배열의 모든 순열 출력하기
 * 시간복잡도 o(n!)
 */

function swap(strArr, index1, index2){
  console.log('index1:',index1);
  console.log('index2:',index2);
  let temp = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
} 

function permute(strArr, begin, end){
  console.log('begin:',begin);
  console.log('end:',end);
  if(begin==end){
    console.log(strArr);
  }else{
    for( let i = begin; i < end + 1; i++){
      swap(strArr,begin,i);
      permute(strArr, begin+1, end);
      swap(strArr, begin, i);
    }
  }
  console.log("-----------------");
}

function permuteArray(strArr){
  permute(strArr,0,strArr.length-1)
}

permuteArray(['0','1','2']);