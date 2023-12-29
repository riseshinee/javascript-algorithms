/**
 * 건너뛰기 규칙을 구현하기 위한 불일치표 생성 함수
 * 어떤 패턴의 주어진 문자에 대해 얼마나 건너뛰어야 할지 나타냄
 * @param str
 * @returns {{}}
 */
function buildBadMatchTable(str){
    let tableObj = {},
        strLength = str.length;
    for (let i=0; i<strLength-1; i++){
        tableObj[str[i]] = strLength - 1 -i;
    }

    if(tableObj[str[strLength-1]] == undefined){
        tableObj[str[strLength-1]] = strLength;
    }
    return tableObj;
}
buildBadMatchTable('data'); //{d:3, a:2, t:1}
buildBadMatchTable('struct'); //{s:5, t:4, r:3, u:2, c:1}

/**
 * 보이어-무어 문자열 검색
 * 웹브라우저에서 '찾기' 기능에서 사용
 * 현재 문자열이 불일치표에 존재하는 경우 현재 문자열과 연관된 불일치표값만큼 인덱스 스킵
 * 존재하지 않는 경우 인덱스를 1만큼 증가
 * @param str
 * @param pattern
 * @returns {number}
 */
function boyerMoore(str, pattern){
    let badMatchTable = buildBadMatchTable(pattern),
        offset = 0,
        patternLastIndex = pattern.length - 1,
        scanIndex = patternLastIndex,
        maxOffset = str.length - pattern.length;
    //문자열과 패턴의 길이 차가 maxOffset보다 큰 경우 해단 패턴을 못찾음
    while (offset<=maxOffset){
        scanIndex = 0;
        while (pattern[scanIndex] == str[scanIndex+offset]){
            if(scanIndex == patternLastIndex){
                //현재 인덱스에서 패턴 발견
                return offset;
            }
            scanIndex++;
        }
        let badMatchString = str[offset+patternLastIndex];
        if (badMatchTable[badMatchString]){
            //불일치 표에 존재하는 경우 표의 값만큼 증가
            offset += badMatchTable[badMatchString]
        } else {
            offset += 1;
        }
    }
    return -1;
}

boyerMoore('jellyjam', 'jelly'); //5 인덱스5에서 패턴 발견
boyerMoore('jellyjam', 'sam') //-1 패턴이 존재하지 않음