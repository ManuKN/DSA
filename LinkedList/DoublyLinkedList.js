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
    }
    this.length--;
    return removeNode;
  }
}
let Dlist = new DoublyLinkedList();
console.log(Dlist.Push('Manu'));
console.log(Dlist.Push('Manoj'));
console.log(Dlist.Push('Vinay'));
console.log(Dlist.Push('Mithun'));
console.log(Dlist.Pop());
