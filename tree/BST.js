/**
 * 이진 검색 트리: 왼쪽 자식이 부모보다 작고 오른쪽 자식이 부모보다 큼
 */

function BinarySearchTree(){
    this._root = null;
}

BinarySearchTree.prototype.insert = function (value){
    let thisNode = {left: null, right:null, value:value}
    if(!this._root){
        //루트 값이 없을 때
        this._root = thisNode;
    }else{
        // 조건을 만족할 때까지 루프를 순회함
        let currentRoot = this._root;
        while (true){
            if(currentRoot.left != null){
                currentRoot = currentRoot.left;
            }else{
                currentRoot.left = thisNode;
                break;
            }
        }else if (currentRoot.value < value){
            //현재 노드보다 큰 경우에 오른쪽에 삽입
            //현재 루트가 null이 아닌 경우 증가, null인 역우 삽입
            if(currentRoot.right != null){
                currentRoot = currentRoot.right;
            }else{
                currentRoot.right = thisNode;
                break;
            }
        }else{
            break;
        }
    }
}
/**
 * 삭제
 * 노드에 자식이 없음: null;
 * 노드에 자식이 하나 있음: 현재 자식을 return;
 * 노드에 자식이 두개 있음: 왼쪽 하위 트리의 최대치 또는 오른쪽 하위 트리의 최소치를 찾아서 해당 노드를 대채함
 * @param value
 * @returns {*}
 */
BinarySearchTree.prototype.remove = function (value){
    return deleteRecursively(this._root, value);

    function deleteRecursively(root, value){
        if(!root){
            return null;
        }else if(value < root.value){
            root.left = deleteRecursively(root.left, value);
        }else if(value > root.value){
            root.right = deleteRecursively(root.right, value);
        }else{
            //자식이 없을 때
            if(!root.left && !root.right){
                return null;
            }else if(!root.left){
                root = root.right;
                return root;
            }else if(!root.right){
                root = root.left;
                return root;
            }else{
                let temp = findMin(root.right);
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        return root;
    }
    function findMin(root){
        while (root.left){
            root = root.left;
        }
        return root;
    }
}

/**
 * 현재 루트가 검색 값보다 작은 경우 오른쪽 자식을 방문, 현재 루특 검색 값보다 큰 경우 왼쪽 자식 방문
 * @param value
 */
BinarySearchTree.prototype.findNode = function (value){
    let currentRoot = this._root, found = false;
    while (currentRoot){
        if(currentRoot.value > value){
            currentRoot = currentRoot.left;
        }else if(currentRoot.value < value){
            currentRoot = currentRoot.right;
        }else{
            found = true;
            break;
        }
    }
    return found;
}