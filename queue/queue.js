class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
    }
    dequeue() {
        return this._arr.shift();
    }
    getBuffer(){
        return this._arr.slice();
    }
    isEmpty(){
        return this._arr.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1 -

/**
 * 접근 (n번째 마지막으로 추가된 노드에 접근하려면 디큐를 n번 호출해야 함)
 * 버퍼 사용 이유: 큐에 변경이 생기지 않게 하기 위함111
 * @param queue
 * @param n
 * @returns {*}
 */
function queueAccessNthTopNode(queue,n){
    let bufferArray = queue.getBuffer();
    if(n<=0) throw 'error';

    let bufferQueue = new queue(bufferArray);

    while(--n!==0){
        bufferQueue.dequeue();
    }
    return bufferQueue.dequeue();
}