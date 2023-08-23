/**
 * 계수정렬: 각 항목의 등장 횟수를 센다, 해당 등장 횟수를 사용해 새로운 배열을 생성한다,
 * 시간복잡도: O(k+n)
 * @param array
 * @returns {*[]}
 */
function countSort(array){
    let hash = {}, countArr = [];
    for(let i=0; i<array.length; i++){
        if(!hash[array[i]]){
            hash[array[i]] = 1;
        }else{
            hash[array[i]]++;
        }
    }

    for(let key in hash){
        //항목이 몇개인지 상관없이 해당 항목을 배열에 추가함.
        for(let i=0; i<hash[key]; i++){
            countArr.push(parseInt(key));
        }
    }

    return countArr;
}