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

/**
 * 카누스-모리스-플랫 문자열 검색
 * 텍스트에서 특정 단어의 출현 횟수를 검색
 * 패턴의 인덱스가 패턴의 길이에 도달함 = 문자열을 발견
 * @param str
 * @param pattern
 * @returns {boolean}
 * @constructor
 */
function KMP(str, pattern){
    //접두사 표 만들기
    let prefixTable = longestPrefix(pattern),
        patternIndex = 0,
        strIndex = 0;

    while (strIndex < str.length) {
        if (str.charAt(strIndex) != pattern.charAt(patternIndex)) {
            // 두 문자가 다를 때
            if (patternIndex != 0){
                patternIndex = prefixTable[patternIndex - 1];
            } else {
                // 문자열 인덱스를 다음 문자열로 증가시킨다.
                strIndex ++
            }
        } else if ( str.charAt(strIndex) == pattern.charAt(patternIndex)){
            //두 문자가 동일할 때
            strIndex++;
            patternIndex++;
        }
        if (patternIndex == pattern.length) {
            return true;
        }
    }
    return false;
}

KMP('sammiebae', 'bae'); //ture