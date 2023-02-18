class MinHeap {
  constructor(array) {
    this.heap = [];
    this.buildHeap(array);
  }
  buildHeap(array) {
    this.heap = array;
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i)
    }
  }
  shiftDown(currentIdx) {
    let endIdx = this.heap.length - 1
    let leftIdx = this.leftChild(currentIdx)

    while (leftIdx <= endIdx) {
        let rightIdx = this.rightChild(currentIdx)
        let shiftTo;
        if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
            shiftTo = rightIdx
        }else{
            shiftTo = leftIdx
        }

        if (this.heap[shiftTo] < this.heap[currentIdx]) {
            let temp = this.heap[currentIdx]
            this.heap[currentIdx] = this.heap[shiftTo]
            this.heap[shiftTo] = temp

            currentIdx = shiftTo
            leftIdx = this.leftChild(currentIdx)
        }else{
            return
        }
    }
  }
  shiftUp(currentIdx) {
    let parentIdx = this.parent(currentIdx)

    while (parentIdx >= 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
        let temp = this.heap[currentIdx]
        this.heap[currentIdx] = this.heap[parentIdx]
        this.heap[parentIdx] = temp

        currentIdx = parentIdx
        parentIdx = this.parent(currentIdx)
    }
  }
  peek() {
    return this.heap[0]
  }
  remove() {
    let temp = this.heap[0]
    this.heap[0] = this.heap[this.heap.length -1]
    this.heap[this.heap.length -1] = temp

    this.heap.pop()
    this.shiftDown(0)
  }
  insert(val){
    this.heap.push(val)
    this.shiftUp(this.heap.length - 1)
  }
  display() {
    for (let i = 0; i < this.heap.length; i++) {
      if (this.heap[i]) {
        console.log(this.heap[i]);
      }
    }
  }
  parent(i) {
    return Math.floor((i - 1) / 2)
  }
  leftChild(i) {
    return (i * 2) + 1;
  }
  rightChild(i) {
    return (i * 2) + 2;
  }
}

const heap = new MinHeap([6,2,8])
heap.display()
console.log('--------');
heap.insert(1)
heap.insert(5)
heap.insert(15)
heap.display()
console.log('------');
heap.remove()
heap.display()

