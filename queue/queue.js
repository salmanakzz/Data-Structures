class Node {
  constructor(data) {
    this.data = data;
  }
}

let front = null;
let rear = null; 

function enqueue(data) {
  let newNode = new Node(data);

  if (rear == null) {
    front = rear = newNode;
    return;
  }
  rear.next = newNode;
  rear = newNode;
}

function dequeue() {
  if (front == null) {
    console.log("list is empty");
  }
  front = front.next;

  if (front == null) {
    rear = null;
  }
}

function display() {
  let current = front;

  if (current == null) {
    console.log("list is empty");
    return;
  }

  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
}

enqueue(1)
enqueue(2)
enqueue(3)

display()

console.log('----');

dequeue()

display()