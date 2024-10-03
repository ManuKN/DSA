class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  Push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  Pop() {
    let removeNode = this.tail;
    if (!this.head) {
      this.head = null;
      this.head = null;
    } else {
      this.tail = removeNode.prev;
      this.tail.next = null;
      removeNode.prev = null;
    }
    this.length--;
    return removeNode;
  }
  shift() {
    if (!this.tail) return false;
    let removedHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }
  unshift(val) {
    let newnode = new Node(val);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = this.head;
      this.head.prev = newnode;
      this.head = newnode;
    }
    this.length++;
    return this;
  }
  Get(index) {
    if (!this.length || index < 0 || index > this.length - 1) return null;
    else if (index > this.length / 2) {
      let count = this.length - 1;
      let prevVal = this.tail;
      while (count != index) {
        prevVal = prevVal.prev;
        count--;
      }
      return prevVal;
    } else {
      let count = 0;
      let nextVal = this.head;
      while (count != index) {
        nextVal = nextVal.next;
        count++;
      }
      return nextVal;
    }
  }
  Set(index ,val){
   let current = this.Get(index);
   if(current){
    current.val = val;
    return true;
   }else return false;
  }
  Insert(index , val){
   if(index > this.length || index < 0) return false
   if(!index) return !!this.unshift(val)
   if(index === this.length) return !!this.Push(val)
   else{
    let newNode = new Node(val);
    let prevnode = this.Get(index-1);
    newNode.prev = prevnode;
    newNode.next = prevnode.next;
    prevnode.next.prev = newNode;
    prevnode.next = newNode;
   }
   this.length++;
   return true;
  }
  Remove(index){
       if(index < 0 || index > this.length) return undefined
       if(!index) return !!this.shift()
       if(index === this.length) return !!this.Pop()
       let removedNode = this.Get(index)
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--
      return removedNode
  }
}
let Dlist = new DoublyLinkedList();
console.log(Dlist.Push('Manu'));
console.log(Dlist.Push('Manoj'));
console.log(Dlist.Push('Vinay'));
console.log(Dlist.Push('Mithun'));
console.log(Dlist.shift());
console.log(Dlist.unshift('chethu'));
console.log(Dlist.Get(2));
console.log(Dlist);
console.log(Dlist.Set(1 , "Manu"))
console.log(Dlist);
console.log(Dlist.Insert(2,"nkn"))
console.log(Dlist);
console.log(Dlist.Remove(1))
console.log(Dlist);
let color = ["red","yellow","green","voilet"]
let colors = Array.from({length : 4},(v ,i) =>({
  id : i+1,
  banna : color[i]
}))
console.log(colors)

