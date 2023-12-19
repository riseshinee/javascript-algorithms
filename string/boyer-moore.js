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