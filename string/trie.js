/**
 * 문자열을 검색해 저장된 문자열 중 일치하는 문자열이 있는지 확인하는 트리
 * @constructor
 */
function TrieNode(){
    this.chilldren = {};
    this.endOfWord = false;
}

function Trie(){
    this.root = new TrieNode();
}

Trie.prototype.insert = function (word){
    let current = this.root;
    for(let i=0; i<word.length; i++){
        let ch = word.charAt(i);
        let node = current.chilldren[ch];
        if (node == null){
            node = new TrieNode();
            current.chilldren[ch] = node;
        }
        current = node;
    }
    current.endOfWord = true;
}

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

Trie.prototype.delete = function (word){
    this.deleteRecursively(this.root, word,0);
}

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