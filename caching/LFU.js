/**
 * LFU(최소빈도사용): 가장 참조 빈도가 낮은 항목을 삭제
 * @param key
 * @param value
 * @constructor
 */
function LFUNode(key, value){
    this.prev = null;
    this.next = null;
    this.key = key;
    this.data = value;
    this.freqCount = 1;
}

function LFUDoublyLinkedList(){
    this.head = new LFUNode('buffer head', null);
    this.tail = new LFUNode('buffer tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
}

function LFUCache(capacity){
    this.keys = {};
    this.freq = {};
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;
}

LFUDoublyLinkedList.prototype.insertAtHead = function (node){
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
}

LFUDoublyLinkedList.prototype.removeAtTail = function (node){
    let oldTail = this.tail.prev;
    let prev = this.tail.prev;
    prev.prev.next = this.tail;
    this.tail.prev = prev.prev;
    this.size--;
    return oldTail;
}

LFUDoublyLinkedList.prototype.removeNode = function (node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
}
/**
 * 캐시 set
 * @param key
 * @param value
 */
LFUCache.prototype.set = function (key,value){
    let node = this.keys[key];
    if(node == undefined){
        node = new LFUNode(key, value);
        this.keys[key] = node;
        //신규 항목 삽입
        if(this.size != this.capacity){
            if(this.freq[1] === undefined){
                this.freq[1] = new LFUDoublyLinkedList();
            }
            this.freq[1].insertAtHead(node);
            this.size++;
        }else{
            //삭제 후 삽입
            let oldTail = this.freq[this.minFreq].removeAtTail();
            delete this.keys[oldTail.key];

            if(this.freq[1] === undefined){
                this.freq[1] = new LFUDoublyLinkedList();
            }
            this.freq[1].insertAtHead(node);
        }
        this.minFreq = 1;
    //어떤 항목을 제거할 지 계산
    }else{
        let oldFreqCount = node.freqCount;
        node.data = value;
        node.freqCount++;

        this.freq[oldFreqCount].removeNode(node);

        if(this.freq[node.freqCount] === undefined){
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);

        if(oldFreqCount === this.minFreq && Object.keys(this.freq[oldFreqCount]).size === 0){
            this.minFreq++;
        }
    }

}

LFUCache.prototype.get = function (key){
    let node = this.keys[key];

    if(node === undefined){
        return null;
    }else{
        let oldFreqCount = node.freqCount;
        node.freqCount++;

        this.freq[oldFreqCount].removeNode(node);

        if(this.freq[node.freqCount] === undefined){
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);

        //접근했으니 카운트 증가
        if(oldFreqCount === this.minFreq && Object.key(this.freq[oldFreqCount]).length == 0){
            this.minFreq++;
        }
        return node.data;
    }
}