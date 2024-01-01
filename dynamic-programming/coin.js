/**
 * 동전 교환 알고리즘: 총 금액을 동전으로 교환하기 위한 조합의 수
 * @param coinArr //동전 종류, 각 금액의 동전은 무한개
 * @param numCoins //동전 금액 종류 수
 * @param coinValue //총 금액
 * @returns {*|number}
 */
function countCoinWays(coinArr, numCoins, coinValue) {
    if (coinValue == 0) {
        return 1;
    }

    if (coinValue < 0 || (numCoins <= 0 && coinValue >= 1)) {
        return 0;
    }

    return countCoinWays(coinArr, numCoins - 1, coinValue) + countCoinWays(coinArr, numCoins, coinValue-coinArr[numCoins-1]);
}
function countCoinWaysWrapper(coinArr, coinValue) {
    return countCoinWays(coinArr, coinArr.length, coinValue);
}
countCoinWaysWrapper([1,2,3], 4);

/**
 * 행렬에서 (i,j) 위치의 항목은 동전 조합의 개수
 * @param coinArr
 * @param numCoins //동전 금액 종류 수
 * @param coinValue //합계금액
 */
function countCoinWaysDP(coinArr, numCoins, coinValue) {
    let dpMatrix = [];

    for (let i=0; i<= coinValue; i++) {
        dpMatrix[i] = [];
        for (let j=0; j<numCoins; j++){
            dpMatrix[i][j] = undefined;
        }
    }

    for (let i=0; i<numCoins; i++) {
        dpMatrix[0][i] = 1;
    }

    for (let i = 1; i < coinValue+1; i++){
        for (let j = 0; j < numCoins; j++){
            let temp1 = 0, temp2 = 0;

            if (i - coinArr[j] >= 0 ){
                temp1 = dpMatrix[i - coinArr[j]][j];
            }

            if(j>=1){
                temp2 = dpMatrix[i][j-1];
            }
            dpMatrix[i][j] = temp1 + temp2;
        }
    }
    return dpMatrix[coinValue][numCoins-1];
}

function countCoinWaysDPWrapper(coinArr, coinValue) {
    return countCoinWaysDP(coinArr, coinArr.length, coinValue);
}

