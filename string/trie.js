/**
 * 문자열을 검색해 저장된 문자열 중 일치하는 문자열이 있는지 확인하는 트리
 * @constructor
 */

/**
 * root node
 * @constructor
 */
function TrieNode(){
    this.chilldren = {};
    this.endOfWord = false;
}
function Trie(){
    this.root = new TrieNode();
}

/**
 * 트라이에 신규 노드(문자)를 삽입할 대 해당 노드가 루트의 자식으로 존재하지 않는 경우 해당 노드를 자식으로 생성
 * @param word
 */
Trie.prototype.insert = function (word){
    let current = this.root;
    for(let i=0; i<word.length; i++){
        let ch = word.charAt(i);
        let node = current.chilldren[ch];
        if (node == null){
            //자식으로 추가
            node = new TrieNode();
            current.chilldren[ch] = node;
        }
        current = node;
    }
    current.endOfWord = true;
}

/**
 * 어떤 단어가 존재하는지 검색
 * @param word
 * @returns {boolean}
 */
Trie.prototype.search = function (word){
    let current = this.root;
    for( let i = 0; i<word.length; i++){
        let ch = word.charAt(i);
        let node = current.chilldren[ch];
        if (node == null){
            return false;
        }
        current = node;
    }
    return current.endOfWord;
}

let trie = new Trie();
trie.insert("sammie");
trie.insert("simran");
trie.search("simran"); //true
trie.search("sam"); //false


Trie.prototype.delete = function (word){
    this.deleteRecursively(this.root, word,0);
}

/**
 * 루트 노드로부터 삭제하고자 하는 단어의 마지막 문자에 도달할 때까지 순회, 재귀법 사용
 * @param current
 * @param word
 * @param index
 * @returns {boolean}
 */
Trie.prototype.deleteRecursively = function (current, word, index){
    if(index == word.length){
        if(!current.endOfWord){
            //단어의 끝에 도달했을 때
            return false;
        }
        current.endOfWord = false;
        return Object.keys(current.chilldren).length == 0;
    }
    let ch = word.charAt(index),
        node = current.chilldren[ch];
    if (node == null){
        return false;
    }
    let shouldDeleteCurrentNode = this.deleteRecursively(node, word, index + 1);

    //문자와 트라이 노드 참조의 맵핑을 맵으로부터 삭제
    if(shouldDeleteCurrentNode){
        delete current.chilldren[ch];
        // 맵에 더 이상 매핑이 존재하지 않으면 true 반환
        return Object.keys(current.chilldren).length == 0;
    }
    return false;
}