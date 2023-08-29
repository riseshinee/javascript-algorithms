/**
 * 선형 탐사
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

  let hashedIndex = this.hash(key);
  
  //선형탐사
  while(this.keys[hashedIndex] != null){
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
}

HashTable.prototype.get = function(key){
  let hashedIndex = this.hash(key);

  while(this.keys[hashedIndex] != key ){
    hashedIndex ++;
    hashedIndex = hashedIndex % this.size;
    return this.values[hashedIndex];
  }
}

HashTable.prototype.hash = function(key){
  if(!Number.isInteger(key)) throw 'must be int';
  return key % this.size;
}

HashTable.prototype.initArray = function(size) {
  let array = [];
  for(let i=0; i<size; i++){
    array.push(null);
  }
  return array;
}

let exampletable = new HashTable(13);
exampletable.put(7, "a");
exampletable.put(20, "b");
exampletable.put(33, "c");
exampletable.put(46, "d");
exampletable.put(59, "e");
exampletable.put(72, "f");
exampletable.put(85, "g");
exampletable.put(98, "h");

console.log(exampletable);