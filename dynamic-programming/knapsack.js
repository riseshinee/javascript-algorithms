/**
 * 배낭문제: 담을 수 있는 최대 무게가 정해진 배낭과 함께 각각의 무게와 가치가 주어진 아이템의 집합이 주어졌을 때, 배낭에 담은 아이템들의 가치의 합이 최대가 되도록 하는 아이템들의 부분집합을 찾는 문제
 * @param index //현재 고려중인 아이템의 인덱스
 * @param weights //무게
 * @param values //가치
 * @param target //배낭에 들어갈 수 있는 최대 무게
 * @returns {number}
 */
function knapsackNaive(index, weights, values, target) {
    let result = 0;

    if (index <= -1 || target <= 0) {
        result = 0;
    } else if (weights[index] > target){
        result = knapsackNaive(index-1, weights, values, target);
    } else {
        let current = knapsackNaive(index-1, weights, values, target);
        let currentPlusOther = values[index] +
            knapsackNaive(index-1, weights, values, target-weights[index]);
        result = Math.max(current, currentPlusOther);
    }
    return result;
}

let weigths = [1,2,4,2,5],
    value = [5,3,5,3,2],
    target = 10;
function knapsackDP(index, weigths, values, target, matrixDP){
    let result = 0;

    //DP
    if (matrixDP[index + '-' + target]) {
        return matrixDP[index + '-' + target];
    }

    if (index <= -1 || target <= 0) {
        result = 0
    } else if (weigths[index] > target) {
        result = knapsackDP(index-1, weigths, values, target, matrixDP);
    } else {
        let current = knapsackDP(index-1, weigths, values, target),
            currentPlusOther = values[index] + knapsackDP(index-1, weigths, values, target-weigths[index]);
        result = Math.max(current, currentPlusOther);
    }
    matrixDP[index + '-' + target] = result
    return result;
}
knapsackDP(4, weigths, value, target, {});