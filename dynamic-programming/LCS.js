/**
 * 최장 공통 부분 수열: 이는 주어진 여러 개의 수열 모두의 부분수열이 되는 수열들 중에 가장 긴 것을 찾는 문제
 * @param str1
 * @param str2
 * @param str1Length
 * @param str2Length
 * @returns {*|number}
 * @constructor
 */
function LCSNaive(str1, str2, str1Length, str2Length) {
    if (str1Length == 0 || str2Length == 0) {
        return 0;
    }

    if (str1[str1Length-1] == str2[str2Length-1]) {
        return 1 + LCSNaive(str1, str2, str1Length-1, str2Length-1);
    } else {
        return Math.max(
            LCSNaive(str1, str2, str1Length, str2Length-1),
            LCSNaive(str1, str2, str1Length-1, str2Length)
        );
    }
}

function LCSNaiveWrapper(str1, str2) {
    return LCSNaive(str1, str2, str1.length, str2.length);
}
LCSNaiveWrapper('AGGTAB', 'GXTXAYB');

function LCSLength(str1, str2) { //str1:행, str2:열
    let matrix = Array(str1.length+1).fill(Array(str2.length+1).fill(0)),
        rowLength = str1.length+1,
        colLength = str2.length+1,
        max = 0;

    for (let row = 1; row<rowLength; row++){
        for (let col=1; col<colLength; col++) {
            let str1Char = str1.charAt(row-1),
                str2Char = str2.charAt(col-1);

            if (str1Char === str2Char) {
                matrix[row][col] = matrix[row-1][col-1] + 1;
                max = Math.max(matrix[row][col], max);
            }
        }
    }
    return max;
}
