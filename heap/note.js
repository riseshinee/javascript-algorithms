/**
 * 트리와 비슷한 자료구조
 * 최대 힙: 루트 노드가 가장 높은 값을 갖고 각 노드의 값이 자식의 값보다 큼
 * 최소 힙: 루트 노드가 가장 낮은 값을 갖고 각 노드의 값이 자식의 값보다 작음
 * 배열을 사용해 자료 저장, 부모와 자식 간의 관계를 쉽게 정의, 이진힙
 */

function Heap(){
    this.items = [];
}

Heap.prototype.swap = function (index1, index2){
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
}

Heap.prototype.parentIndex = function (index){
    return Math.floor((index - 1) / 2);
}

Heap.prototype.leftChildIndex = function (index){
    return index*2+1;
}

Heap.prototype.rightChildIndex = function (index){
    return index*2+2;
}

Heap.prototype.parent = function (index){
    return this.items[this.parentIndex(index)];
}

Heap.prototype.leftChild = function (index){
    return this.items[this.leftChildIndex(index)];
}

Heap.prototype.rightChild = function (index){
    return this.items[this.rightChildIndex(index)];
}

/**
 * 최대힙은 최댓값을, 최소힙은 최솟값을 반환
 * @param item
 * @returns {*}
 */
Heap.prototype.peek = function (item){
    return this.items[0];
}

Heap.prototype.size = function (){
    return this.items.length;
}
