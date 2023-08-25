/**
 * 수학 라이브러리를 사용하지 않고 정수의 제곱근 함수 구현하기
 * hint: 1과 number수 사이의 범위를 큰 쪽과 작은쪽으로 분할
 * 이진 검색 알고리즘, 시간복잡도: O(lon2(n))
 * @param number
 */
function sqrtInt(number) {
 if(number == 0 || number == 1) return number;

 let start = 1, end = number, ans;

 while (start <= end){
     let mid = parseInt((start+end)/2);
     if( mid*mid == number) return mid;

     if(mid*mid<number){
         start = mid+1;
         ans = mid;
     }else{
         end = mid - 1;
     }
 }
 return ans;
}