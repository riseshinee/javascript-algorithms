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