/**
 * 두 개의 스택을 사용해 큐를 만들기
 * inbox:[1,2,3,4,5] -> outbox:[5,4,3,2,1]
 */

function TwoStackQueue(){
    this.inbox = new Stack();
    this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function (val){
    this.inbox.push(val);
}
TwoStackQueue.prototype.dequeue = function (){
    if(this.outbox.isEmpty()){
        while (!this.inbox.isEmpty()){
            this.outbox.push(this.inbox.pop());
        }
    }
    return this.outbox.pop();
}

let queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); //1
queue.dequeue(); //2
queue.dequeue(); //3