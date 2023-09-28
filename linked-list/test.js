/**
 * 연결 리스트 뒤집기
 * @param sll
 * @returns {*|null|HTMLHeadElement}
 */
function reverseSingleLinkedList(sll){
    let node = sll.head;
    let prev = null;
    while (node){
        let temp = node.next;
        node.next = prev;
        prev = node;
        if(!temp){
            break;
        }
        node = temp;
    }
    return node;
}

/**
 * 연결리스트에서 중복된 항목 제거하기 (해시테이블 사용)
 * @param sll
 */
function deleteDuplicateInUnsortedSll(sll){
    let track = [];

    let temp = sll.head;
    let prev = null;
    while (temp){
        if(track[temp.data]){
            prev.next = temp.next;
        }else{
            track[temp.data] = true;
            prev = temp;
        }
        temp = temp.next;
    }
}
