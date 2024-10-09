class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  Insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    //Insering Node to tree using recursion
    const InsertNode = (current, newNode) => {
      if (current.value === newNode.value) return undefined;
      if (current.value > newNode.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          InsertNode(current.left, newNode);
        }
      } else if (current.value < newNode.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          InsertNode(current.right, newNode);
        }
      }
    };

    InsertNode(this.root, newNode);
    return this;
  }

  //This is Inserting the node to the tree which is solved by Iterative method
  //   Insert(val) {
  //     const newNode = new Node(val);
  //     if (!this.root) {
  //       this.root = newNode;
  //       return this;
  //     } else {
  //       let current = this.root;
  //       while (true) {
  //         if (val === current.value) return undefined;
  //         if (val < current.value) {
  //           if (current.left === null) {
  //             current.left = newNode;
  //             return this;
  //           } else {
  //             current = current.left;
  //           }
  //         } else if (val > current.value) {
  //           if (current.right === null) {
  //             current.right = newNode;
  //             return this;
  //           } else {
  //             current = current.right;
  //           }
  //         }
  //       }
  //     }
  //   }

  Find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (current.value > val) {
        current = current.left;
      } else if (current.value < val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

let Tree = new BinarySearchTree();
console.log(Tree);
console.log(Tree.Insert(10));
console.log(Tree.Insert(5));
Tree.Insert(13);
Tree.Insert(11);
Tree.Insert(2);
Tree.Insert(16);
Tree.Insert(7);
console.log(Tree);
console.log(Tree.Find(13));
