class Stack {
    constructor() {
        this.arr = [];
        this.index = 0;
    }
    push(item) {
        this.arr[this.index++] = item;
    }
    pop() {
        if (this.index <= 0) return null;
        return this.arr.pop();
    }
    getBuffer(){
        return this.arr.slice();
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}

function isBracketVaild(string){
    let stack = new Stack();
    for(let pos = 0; pos < string.length; pos++){
        let curChar = string.charAt(pos);
        if(curChar === "("){
            stack.push(curChar);
        }else if(curChar === ")"){
            if(stack.isEmpty()){
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}
console.log(isBracketVaild("((()))"));
console.log(isBracketVaild("((())"));