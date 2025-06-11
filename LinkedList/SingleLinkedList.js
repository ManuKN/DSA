//since class are object generator this node class will generate a node object which as val and next val of there node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Single linked list class where u do the all the operations of the list
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
    if (this.length === 0) {
      this.head === null;
      this.tail === null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedHead;
  }

  unshift(val) {
    var newnode = new Node(val);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }
    this.length++;
    return this;
  }

  Get(index) {
    //linked list do not have indexes but they but still for the sake of the count will keep it as index
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let positionValue = this.head;
    while (index !== count) {
      positionValue = positionValue.next;
      count++;
    }
    return positionValue;
  }

  Set(index, val) {
    let current = this.Get(index);
    if (current) {
      current.val = val;
      return true;
    } else return false;
  }

  Insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); // !! is a kind o f convert thing to boolean after pushing the push return the entire list. now what !! will do is if the return is truthy then it will be true else false
    if (index === 0) return !!this.unshift(val);
    let newnode = new Node(val);
    let prevnode = this.Get(index - 1);
    let temp = prevnode.next;
    prevnode.next = newnode;
    newnode.next = temp;
    this.length++;
    return true;
  }

  Remove(index) {
    if (!this.head || !this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prevnode = this.Get(index - 1);
    let removednode = prevnode.next;
    prevnode.next = removednode.next;
    this.length--;
    return true;
  }

  ReverseMethod2() {
    if (!this.head || !this.length) return undefined;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;   
    }
  }

  Reverese() {
    if (!this.head || !this.length) return undefined;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    //this logic is very importtant be careful while writing this
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  //this is just to see how visual representation of this reversing using array liek to check how reversing happening
  Print() {
    let arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
  }
}

const list = new SingleLinkedList();

list.push('manu');
list.push('chethu');
list.push('kiran');
list.push('vinay');
list.push('manoj');

console.log(list.Insert(1, 'NKN'));
console.log(list.Insert(6, 'saaman'));
console.log(list.Remove(3));
console.log(list);
console.log(list.Reverese());
