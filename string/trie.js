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