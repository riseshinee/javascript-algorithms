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
 * 선순위순회: 루트->왼쪽->오른쪽순으로 노드를 순회
 * 후순위순회, 중순위순회, 단계순위순회
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

