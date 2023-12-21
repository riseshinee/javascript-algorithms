/**
 * 카누스-모리스-플랫 문자열 검색
 * 텍스트에서 특정 단어의 출현 횟수를 검색
 * @param str
 * @returns {any[]}
 */
function longestPrefix(str){
    //접두사 표를 만드는 알고리즘
    let prefix = new Array(str.length);
    let maxPrefix = 0;
    //인덱스 0에서 접두사를 시작함.
    prefix[0] = 0;
    for (let i=0; i<str.length; i++){
        //불일치되는 동안 접두사 값을 감소한다.
        while (str.charAt(i) !== str.charAt(maxPrefix) && maxPrefix > 0){
            maxPrefix = prefix[maxPrefix-1];
        }
        //문자열이 일치하면 접두사 값을 갱신한다.
        if(str.charAt(maxPrefix) === str.charAt(i)){
            maxPrefix++;
        }
        //접두사 값을 설정한다.
        prefix[i] = maxPrefix;
    }
    return prefix;
}