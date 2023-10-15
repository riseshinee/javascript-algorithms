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
 * TODO: 선순위순회: 루트->왼쪽->오른쪽순으로 노드를 순회, 루트를 조사할 필요가 있을 때
 * TODO: 중순위순회: 왼쪽->루트->오른쪽순으로 노드를 방문, 트리 생성과 같은 순서대로 방문하고 싶을 때
 * TODO: 후순위순회: 왼쪽->오른쪽->루트순으로 노드를 방문, 자식 노드를 조사할 때
 * TODO: 단계순위순회(너비우선검색,BFS): 노드를 단계별로 방문
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

/**
 * 후순위 순회
 */
BinaryTree.prototype.traversePostOrder = function (){
    traversePostOrderHelper(this._root);

    function traversePostOrderHelper(node){
        if(node.left){
            traversePostOrderHelper(node.left);
        }
        if(node.right){
            traversePostOrderHelper(node.right);
        }
    }
}

BinaryTree.prototype.traversePostOrderIterative = function (){
    let s1 = [], s2 = []; //stack
    s1.push(this._root);

    while (s1.length) {
        let node = s1.pop();
        s2.push(node);

        if (node.left) {
            s1.push(node.left);
        }
        if(node.right){
            s1.push(node.right);
        }
    }
    while (s2.length){
        let node = s2.pop();
        console.log(node.value);
    }
}

/**
 * 단계순위순회
 */
BinaryTree.prototype.traverseLevelOrder = function () {
    let root = this._root, queue = [];

    if(!root){
        return;
    }
    queue.push(root);

    while (queue.length){
        let temp = queue.shift();
        if(temp.left){
            queue.push(temp.left);
        }
        if(temp.right){
            queue.push(temp.right);
        }
    }
}