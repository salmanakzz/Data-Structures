class Node {
  constructor(data) {
    this.data = data;
  }
}

let top = null;

function push(data) {
  let newNode = new Node(data);

  if (top == null) {
    top = newNode;
  } else {
    newNode.next = top;
    top = newNode;
  }
}

function pop() {
  if (top == null) {
    console.log("stack underflow");
    return;
  }

  top = top.next;
}

function display() {
  let current = top;

  while (current != null) {
    console.log(current.data + " ");
    current = current.next;
  }
}

push(1);
push(2);
push(3);
push(4);

display();

console.log('-----');

pop()

display();