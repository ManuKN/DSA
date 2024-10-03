class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    Push(val){
        let newnode = new Node(val)
        if(!this.first || !this.size){
        this.first = newnode;
        this.last = this.first;
        }else{
            newnode.next = this.first;
            this.first = newnode; 
        }
        this.size++
        return this
    }

    Pop(){
        if(!this.first) return null
        let temp = this.first
        if(this.size === this.last){
            this.first = null
            this.last = this.first
            return temp
        }
           this.first = this.first.next;
        this.size--
        return temp.val
    }
}

let stack = new Stack();
console.log(stack.Push(12));
console.log(stack.Push(14));
console.log(stack.Push(16));
console.log(stack.Pop())
console.log(stack.Pop())
console.log(stack)



