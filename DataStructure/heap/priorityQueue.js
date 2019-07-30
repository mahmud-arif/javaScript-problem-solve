class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority); 
    this.heap.push(newNode);
    this.bubbleup();
    return this.heap;
  }

  bubbleup() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.heap[parentIndex];
      // console.log(parentElement); 
      if (element.priority <= parentElement.priority) return this.heap;
      this.heap[parentIndex] = element;
      this.heap[index] = parentElement;
      index = parentIndex;
    }
  }

  dequeue() {
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

    if (left < length && this.heap[left].priority > this.heap[largest].priority) {
      largest = left;
      console.log(largest); 
    }
    if (right < length && this.heap[right].priority > this.heap[largest].priority) {
      largest = right;
      console.log(largest); 
    }

    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
      this.sinkDown(largest);
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value; 
    this.priority = priority; 
  }
}

const pq = new PriorityQueue(); 
pq.enqueue(24, 5); 
pq.enqueue(25, 4); 
pq.enqueue(24, 3);
pq.enqueue(24, 1);
console.log(pq.enqueue(34, 10)); 
console.log(pq.dequeue()); 
console.log(pq);   