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

/**
 * RR 회전 (오른쪽-오른쪽 회전)
 * 1. 현재 노드의 값을 왼쪽 자식의 값을로 변경
 * 2. 현재 노드의 왼쪽 자식을 왼쪽 자식의 오른쪽 자식으로 설정
 * 3. 왼쪽 자식의 오른쪽 자식에 현재 노드를 설정
 */
AVLTree.prototype.rotateRR = function () {
    let valueBefore = this.value;
    let leftBefore = this.left;
    this.value = this.left.value;

    this.left = this.left.right;
    leftBefore.right = this;

    this.setDepthBasedOnChildren();
    leftBefore.setDepthBasedOnChildren();

    return leftBefore; // 이동된 서브트리의 새 루트 반환
}

/**
 * 트리 균형 잡기
 */
AVLTree.prototype.balance = function (){
    let ldepth = this.left == null ? 0 : this.left.depth;
    let rdepth = this.right == null ? 0 : this.right.depth;

    if(ldepth > rdepth + 1){
        let lldepth = this.left.left == null ? 0 : this.left.left.depth;
        let lrdepth = this.left.right == null ? 0 : this.left.right.depth;

        if(lldepth < lrdepth){
            this.left.rotateRR();
        }
        this.rotateLL();
    }else if(ldepth + 1 < rdepth){
        let rrdepth = this.right.right == null ? 0 : this.right.right.depth;
        let rldepth = this.right.left == null ? 0 : this.right.left.depth;

        if(rldepth > rrdepth){
            this.right.rotateLL()
        }
        this.rotateRR();
    }
}