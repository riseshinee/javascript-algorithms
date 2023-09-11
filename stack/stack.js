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
        return this.arr[--this.index];
    }
    getBuffer(){
        return this.arr.slice();
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}

let stack = new Stack();
stack.push(1); // arr: [1], index: 1
stack.push(2); // arr: [1, 2], index: 2
stack.push(3); // arr: [1, 2, 3], index: 3
console.log(stack.pop()); // 3 , index: 2
console.log(stack.pop()); // 2 , index: 1
console.log(stack.pop()); // 1 , index: 0
console.log(stack.pop()); // null

/**
 * 검색
 * pop이 버퍼 스택에 대해 호출될 수 있도록 버퍼 스택을 만듬
 * @param stack
 * @param element
 * @returns {boolean}
 */
function stackSearch(stack, element){
    let bufferArray = stack.getBuffer();
    let bufferStack = new Stack(bufferArray);
    while (!bufferStack.isEmpty()){
        if(!bufferStack.pop()===element){
            return true;
        }
    }
    return false;
}