/**
 * 이차 탐사
 * @param size
 * @constructor
 */
function HashTable(size){
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.put = function(key,value){
    if(this.limit >= this.size) throw 'hash table is full';

    let hashedIndex = this.hash(key), squareIndex = 1;

    while(this.keys[hashedIndex] != null){
        hashedIndex += Math.pow(squareIndex,2);
        hashedIndex = hashedIndex % this.size;
        squareIndex++;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}

HashTable.prototype.get = function(key){
    let hashedIndex = this.hash(key), squareIndex = 1;

    while(this.keys[hashedIndex] != key ){
        hashedIndex += Math.pow(squareIndex,2);
        hashedIndex = hashedIndex % this.size;
        squareIndex++;
    }
    return this.values[hashedIndex];
}
