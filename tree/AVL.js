/**
 * AVL: 스스로 균형을 잡는 이진 검색 트리
 * 이진 검색 트리의 높이를 최소로 유지하며 검색, 삽입, 삭제 시간 복잡도 O(log2(n)) 2:밑 을 보장함
 */
function AVLTree(value){
    this.left = null;
    this.right = null;
    this.value = value;
    this.depth = 1;
}

AVLTree.prototype.setDepthBasedOnChildren = function (){
    if(this.node == null){
        this.depth = 0;
    }else{
        this.depth = 1;
    }

    if(this.left != null){
        this.depth = this.left.depth + 1;
    }

    if(this.right != null && this.depth <= this.right.depth){
        this.depth = this.right.depth + 1;
    }
}

/**
 * 오른쪽이 너무 길 때 => 왼쪽 회전
 * 1. 오른쪽 자식을 찾음
 * 2. 현재 노드의 오른쪽 자식에 origin 오른쪽 자식의 오른쪽 자식을 설정
 * 3. origin 오른쪽 자식의 왼쪽 자식에 현재 노드를 설정
 */
AVLTree.prototype.rotateLL = function (){
    let valueBefore = this.value;
    let rightBefore = this.right;
    this.value = this.left.values;

    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;

    this.right.setDepthBasedOnChildren();
    this.setDepthBasedOnChildren();
}

AVLTree.