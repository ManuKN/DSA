class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newnode = new Node(val);
    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head === null;
      this.tail === null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined
    let removedHead = this.head
     this.head = removedHead.next
     this.length--
     if(this.length === 0)
     {
      this.tail = null
     }
     return removedHead
  }
  unshift(val){
    var newnode = new Node(val)
    if(!this.head) {
      this.head = newnode
      this.tail = newnode
    }
    else{
      newnode.next = this.head
      this.head = newnode
    }
    this.length++
    return this
  }
}

const list = new SingleLinkedList();

console.log(list.unshift("manu"))