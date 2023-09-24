/**
 * 단일 연결 리스트
 * @param data
 * @constructor
 */
function SinglyLinkedListNode(data){
    this.data = data; //연결 리스트 노드의 값을 저장
    this.next = next; //다른 인스턴스에 대한 포인터를 저장
}

function SinglyLinkedList(){
    this.head = null; //연결 리스트의 시작
    this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function (){
    return this.size = 0;
}

SinglyLinkedList.prototype.insert = function (value){
    if(this.head === null){
        this.head = new SinglyLinkedListNode(value);
    }else{
        let temp = this.head;
        this.head = new SinglyLinkedListNode(value);
        this.head.next = temp;
    }
    this.size++;
}

let sll1 = new SinglyLinkedList();
sll1.insert(1); // 1-> null
sll1.insert(12); // 12 -> 1 -> null
sll1.insert(20); // 20 -> 12 -> 1 -> null

SinglyLinkedList.prototype.remove = function (value){
    let curHead = this.head;
    if(curHead.data === value){
        this.head = curHead.next;
        this.size--;
    }else{
        let prev = curHead;
        while (curHead.next){
            if(curHead.data === value){
                prev.next = curHead.next;
                prev = curHead;
                curHead = curHead.next;
                break;
            }
            prev = curHead;
            curHead = curHead.next;
        }
        if(curHead.data === value){
            prev.next = null;
        }
        this.size--;
    }
}