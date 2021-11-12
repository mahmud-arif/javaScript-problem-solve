class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value <= current.value) {
          if (this.current.left === null) {
            this.current.left = newNode;
            return this;
          } else {
            current = this.current.left;
          }
        } else {
          if (value > current.value) {
            if (this.current.right === null) {
              this.current.right = newNode;
              return this;
            } else {
              current = this.current.right;
            }
          }
        }
      }
    }
  }
   find(value) {
     if (this.root === null) return false;
     let current = this.root,
       found = false;
     while (current && !found) {
       if (val < current.value) {
         current = current.left;
       } else if (value > current.value) {
         current = current.right;
       } else {
         found =  true;
         return current; 
       }
     }
     return false;
   }
  
  BFS() {
    let node = this.root,
      queue = [],
      data = [];
    queue.push(node); 
    while (queue.length) {
      node = queue.shift();
      data.push(node.val); 
      if (node.left) queue.push(node.left); 
      if (node.right) queue.push(node.right); 
    }
    return data; 
  }
  DFSPreOrder() {
    let data = []; 
    function traverse(node) {
      data.push(node.value); 
      if (node.left) traverse(node.left); 
      if(node.right) traverse(node.right)
    }
    traverse(this.root); 
    return data;
  }
  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right)
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
   DFSIntOrder() {
     let data = [];

     function traverse(node) {
       if (node.left) traverse(node.left);
       data.push(node.value);
       if (node.right) traverse(node.right); 
       
     }
     traverse(this.root);
     return data;
   }
}
