function DoubleLinkedListNode(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoubleLinkedList(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}

DoubleLinkedList.prototype.isEmpty = function (){
    return this.size === 0;
}

/**
 * 헤드에 항목 삽입
 * @param value
 */
DoubleLinkedList.prototype.addAtFront = function (value){
    if(this.head === null){
        this.head = new DoubleLinkedListNode(value);
        this.tail = this.head;
    }else{
        let temp = new DoubleLinkedListNode(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
    this.size++;
}

/**
 * 테일에 항목 삽입
 * @param value
 */
DoubleLinkedList.prototype.insertAtTail = function (value){
    if(this.tail === null){
        this.tail = new DoubleLinkedListNode(value);
        this.head = this.tail;
    }else{
        let temp = new DoubleLinkedListNode(value);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }
    this.size++;
}

/**
 * 검색
 * head, tail 양쪽 방향에서 순회 가능
 * @param value
 * @returns {boolean}
 */
DoubleLinkedList.prototype.findStartingHead = function (value){
    let curHead = this.head;
    while (curHead.next){
        if(curHead.data === value){
            return true;
        }
        curHead = curHead.next;
    }
    return false;
}