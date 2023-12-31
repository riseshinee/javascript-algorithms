/**
 * 동적 프로그래밍
 * 문제를 그 문제보다 더 작은 부분 문제들로 쪼개는 과정
 * 이미 꼐산된 값들을 저장하고 해당 값들을 사용하는 방법
 */

/**
 * n이 커지면 시간복잡도가 증가함,
 * @param n
 * @returns {*}
 */
function getNthFibo(n){
    if (n<=1) {
        return n;
    } else {
        return getNthFibo(n-1) + getNthFibo(n-2);
    }
}

/**
 * 중복 부분 문제
 * ex) 6에 대한 수열 -> 4,5에 대한 피보나치 수열
 * @type {{}}
 */
let cache = {};
function fiboBest(n){
    if(n<=1) {
        return n;
    }
    if(cache[n]) {
        return cache[n];
    }
    return (cache[n] = fiboBest(n-1)+fiboBest(n-2));
}
fiboBest(10);

/**
 * 최적 부분 구조
 * 걸을 수를 채우는 방법: n걸음 거리가 주어졌을 때 1,2,3걸음으로 n걸음을 채우는 경우의 수
 * @param step
 * @returns {*|number}
 */
function waysToCoverStepsDP(step) {
    let cache = {};
    if(step < 0) {
        return 0;
    }
    if(step == 0) {
        return 1;
    }

    if(cache[step]) {
        return cache[step];
    } else {
        cache[step] = waysToCoverStepsDP(step-1) +
            waysToCoverStepsDP(step-2) + waysToCoverStepsDP(step-3);
        return cache[step];
    }
}