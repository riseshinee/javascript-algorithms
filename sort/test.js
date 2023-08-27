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

/**
 * 배열의 두 항목을 더해서 주어진 수가 될 수 있는지 확인하기
 * hint: 이미 방문한 숫자를 기억하기, 시간복잡도:O(n)
 * @param arr
 * @param sum
 * @returns {boolean}
 */
function findTwoSum(arr, sum){
    let store = {};

    for(let i=0; i<arr.length; i++){
        if(store[arr[i]]) return true;
        else store[sum-arr[i]] = arr[i];
    }
    return false;
}

/**
 * 오름차순으로 정렬된 배열에서 단 한번만 등장하는 항목 찾기
 * hint: 이진 검색 알고리즘
 * 시간복잡도: O(lon2n)
 * @param {*} arr 
 * @param {*} low 
 * @param {*} high 
 * @returns 
 */
function findOnlyOnce(arr, low, high){
    if( low > high ) return null;
    if( low == high ) return arr[low];

    let mid = Math.floor((high+low)/2); //중간 인덱스를 찾음

    if(mid%2 == 0){ //
        if(arr[mid] == arr[mid+1]){
            return findOnlyOnce(arr, mid+2, high); //큰쪽
        }else{
            return findOnlyOnce(arr, low, mid); //작은쪽
        }
    }else{
        if(arr[mid] == arr[mid-1]){
            return findOnlyOnce(arr, mid+1, high); //큰쪽
        }else{
            return findOnlyOnce(arr, low, mid-1); //작은쪽
        }
    }
    
}
function findOnlyOnceHelper(arr){
    return findOnlyOnce(arr, 0, arr.length);
}