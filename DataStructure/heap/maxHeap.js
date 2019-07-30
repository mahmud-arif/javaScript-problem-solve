class Maxheap{
  constructor() {
    this.heap = []; 
  }

  insert(val) {
    this.heap.push(val); 
    this.bubbleup(); 
    return this.heap; 
  }

  bubbleup() {
    let index = this.heap.length - 1; 
    while (index > 0) {
      let element = this.heap[index]; 
      let parentIndex = Math.floor((index - 1) / 2); 
      let parentElement = this.heap[parentIndex]; 
      if (element <= parentElement) return this.heap; 
      this.heap[parentIndex] = element; 
      this.heap[index] = parentElement; 
      index = parentIndex; 
    }
  }

  extractMax() {
    let max = this.heap[0]; 
    this.heap[0] = this.heap.pop(); 
    this.sinkDown(0); 
    return max; 
  }

  sinkDown(index) {
    let left = index * 2 + 1; 
    let right = index * 2 + 2; 
    let largest = index; 
    const length = this.heap.length; 

    if (left <= length && this.heap[left] > this.heap[largest]) {
      largest = left; 
    }
    if (right <= length && this.heap[right] > this.heap[largest]) {
      largest = right; 
    }

    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]; 
      this.sinkDown(largest); 
    }
  }
}

const heap = new Maxheap(); 
heap.insert(14); 
heap.insert(16);
heap.insert(188);
heap.insert(15);

console.log(heap.insert(200))
console.log(heap.insert(18))
console.log(heap.extractMax()); 
console.log(heap); 