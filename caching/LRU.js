function DLLNode(key,data){
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
}

function LRUCache(capacity){
    this.keys = {};
    this.capacity = capacity;
    this.head = new DLLNode("", null);
    this.tail = new DLLNode("", null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

LRUCache.prototype.removeNode = function (node){
    let prev = node.prev, next = node.next;
    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.addNode = function (node){
    let realTail = this.tail.prev;
    realTail.next = node;

    this.tail.prev = node;
    node.prev = realTail;
    node.next = this.tail;
}