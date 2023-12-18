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

    while (offset<=maxOffset){
        scanIndex = 0;
        while (pattern[scanIndex] == str[scanIndex+offset]){
            if(scanIndex == patternLastIndex){
                return offset;
            }
            scanIndex++;
        }
        let badMatchString = str[offset+patternLastIndex];
        if (badMatchTable[badMatchString]){
            offset += badMatchTable[badMatchString]
        } else {
            offset += 1;
        }
    }
    return -1;
}