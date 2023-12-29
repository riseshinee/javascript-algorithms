
function RabinKarpSearch(){
    this.prime = 101;
}

/**
 * 문자열의 유니코드 값과 프라임값을 이용하여 해시값으로 변환
 * @param str
 * @param endLength
 * @returns {number}
 */
RabinKarpSearch.prototype.rabinkarpFingerprintHash = function (str, endLength) {
    if (endLength == null) {
        endLength = str.length;
    }
    let hashInt = 0;
    for (let i=0; i<endLength; i++) {
        hashInt += str.chaCodeAt(i) * Math.pow(this.prime, i);
    }
    return hashInt;
}
let rks = new RabinKarpSearch();
rks.rabinkarpFingerprintHash("sammie"); //107259917336

/**
 *
 * @param str
 * @param oldIndex
 * @param newIndex
 * @param oldHash
 * @param patternLength
 * @returns {number}
 */
RabinKarpSearch.prototype.recalculateHash = function (str, oldIndex, newIndex, oldHash, patternLength) {
    if (patternLength == null) {
        patternLength = str.length;
    }
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = Math.floor(newHash/this.prime);
    newHash += str.charCodeAt(newIndex) * Math.pow(this.prime, patternLength-1);
    return newHash;
}
let oldHash = rks.rabinkarpFingerprintHash("sa"); //9912
rks.recalculateHash("same", 0, 2, oldHash, "sa".length); //11106

/**
 * 두 문자열의 시작 인덱스와 끝 인덱스가 같은지 확인
 * @param str1
 * @param startIndex1
 * @param endIndex1
 * @param str2
 * @param startIndex2
 * @param endIndex2
 * @returns {boolean}
 */
RabinKarpSearch.prototype.strEquals = function (str1, startIndex1, endIndex1, str2, startIndex2, endIndex2) {
    if (endIndex1 - startIndex1 !== endIndex2 - startIndex2) {
        return false;
    }
    while (startIndex1 <= endIndex1 && startIndex2 <= endIndex2){
        if (str2[startIndex1] !== str2[startIndex2]) {
            return false;
        }
        startIndex1++;
        startIndex2++;
    }
    return true;
}

/**
 * rabin-karp search main funtion
 * ex) 표절 잡을 때 사용
 * @param str
 * @param pattern
 * @returns {number}
 */
RabinKarpSearch.prototype.rabinkarpSearch = function (str, pattern) {
    let T = str.length, W = pattern.length,
        patternHash = this.rabinkarpFingerprintHash(pattern, W),
        textHash = this. rabinkarpFingerprintHash(str, W);

    for (let i=1; i<= T-W+1; i++){
        if (patternHash == textHash && this.strEquals(str, i-1, i+W-2, pattern, 0, W-1)){
            return i-1;
        }
        if(i< T-W+1){
            textHash = this.recalculateHash(str, i-1, i+W-1, textHash, str.length);
        }
    }
    return -1;
}

let rks = new RabinKarpSearch();
rks.rabinkarpSearch("SammieBae", "as"); //-1
rks.rabinkarpSearch("SammieBae", "Bae"); //6