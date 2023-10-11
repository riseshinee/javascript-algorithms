/**
 * 트리: 자식 노드를 지닌 노드들로 구성됨
 * 루트노드: 최상위 노드
 */

function  TreeNode(value){
    this.value = value;
    this.children = [];
}

/**
 * 이진트리: 자식노드가 왼쪽, 오른쪽 두개만 존재
 * @param value
 * @constructor
 */
function BinaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree(){
    this._root = null;
}

/**
 * 트리 순회: 인덱스가 크기 제한에 도달할 때까지 인덱스 증가
 * TODO: 선순위순회: 루트->왼쪽->오른쪽순으로 노드를 순회
 * TODO: 중순위순회: 왼쪽->루트->오른쪽순으로 노드를 방문
 * TODO: 후순위순회,단계순위순회
 */

/**
 * 선순위순회
 */
BinaryTreeNode.prototype.traversePreOrder = function (){
    traveersePreOrderHelper(this._root);

    function traveersePreOrderHelper(node){
        if(!node) return;
        console.log(node.value);
        traveersePreOrderHelper(node.left);
        traveersePreOrderHelper(node.right);
    }
}

/**
 * 중순위 순회
 */
BinaryTree.prototype.traverseInOrder = function (){
    traverseInOrderHelper(this._root);

    function traverseInOrderHelper(node){
        if(!node){ return; }
        traverseInOrderHelper(node.left);
        console.log(node.value);
        traverseInOrderHelper(node.right);
    }
}

BinaryTree.prototype.traverseInOrderIterative = function (){
    let current = this._root, s = [], done = false;

    while (!done){
        // 현재 노드의 가장 왼족에 있는 노드로 이동
        if(current != null){
            // 현재 노드의 왼쪽 하위 트리를 순회하기 전에 포인터가 스택의 트리 노드를 가리키도록 함
            s.push(current);
            current = current.left;
        } else {
            if(s.length){
                current = s.pop();
                console.log(current.value);
                current = current.right;
            }else{
                done = true;
            }
        }
    }
}

