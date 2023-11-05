/**
 * 삼투: 힙에 항목을 추가하거나 삭제할 때 힙의 구조는 유지되어야 하므로 필요
 * @constructor
 */
function MinHeap(){
    this.items = [];
}

MinHeap.prototype = Object.create(Heap.prototype);

MinHeap.prototype.bubbleDown = function (){
    let index = 0;

    while (this.leftChild(index) && this.leftChild(index) < this.items[index]){
        let smallerIndex = this.leftChildIndex(index);
        if(this.rightChild(index)&&this.rightChild(index) < this.items[smallerIndex]){
            smallerIndex = this.rightChildIndex(index);
        }
        this.swap(smallerIndex, index);
        index = smallerIndex;
    }
}

MinHeap.prototype.bubbleUp = function (){
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]){
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}