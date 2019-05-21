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
          if(value > current.value){
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
}