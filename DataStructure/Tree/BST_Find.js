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
  find(value) {
    if (this.root === null) return false; 
    let current = this.root,
      found = false; 
    while (current && !found) {
      if (value < current.value) {
        current = current.left; 
      } else if (value > current.value) {
        current = current.right; 
      } else {
        return true; 
      }
    }
    return false; 
  }
}
