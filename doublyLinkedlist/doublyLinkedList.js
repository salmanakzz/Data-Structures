class Node {
  constructor(data) {
    this.data = data;
  }
}

let head = null;
let tail = null;

function addNode(data) {
  let newNode = new Node(data);

  if (head === null) {
    head = newNode;
  } else {
    tail.next = newNode;
    newNode.prev = tail;
  }

  tail = newNode;
}

function printList() {
  if (head == null) {
    console.log("list empty");
    return;
  }
  let temp = head;

  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

function printListReverse() {
  if (head == null) {
    console.log("list empty");
    return;
  }
  let temp = tail;

  while (temp != null) {
    console.log(temp.data);
    temp = temp.prev;
  }
}

function deleteNode(data) {
  let temp = head,
    prev = null;

  if (temp != null && temp.data == data) {
    head = temp.next;
    return;
  }

  while (temp != null && temp.data != data) {
    prev = temp;
    temp = temp.next;
  }

  if (temp == null) {
    return;
  }

  if (temp == tail) {
    tail = prev;
    tail.next = null;
    return;
  }

  prev.next = temp.next;
}

function insertAfter(nextTo, data) {
  let newNode = new Node(data);
  let temp = head;

  while (temp != null && temp.data != nextTo) {
    temp = temp.next;
  }

  if (temp == null) {
    return;
  }

  if (temp == tail) {
    tail.next = newNode;
    tail = newNode;
    return;
  }

  newNode.next = temp.next;
  temp.next = newNode;
}

function insertBefore(prevTo, data) {
  let newNode = new Node(data);
  let temp = head;

  while (temp!= null && temp.data!= prevTo) {
    temp = temp.next;
  }

  if (temp == null) {
    return;
  }

  if (temp == tail) {
    temp = temp.prev
    newNode.next = tail;
    temp.next = newNode
    return;
  }
  prev = temp.prev
  newNode.next = temp;
  prev.next = newNode
}

printList();



addNode(10);
addNode(40);
addNode(30);
addNode(50);

printList();

console.log("------");

printListReverse();

console.log("------");

deleteNode(30);

printList();

console.log("------");

insertAfter(50, 15);

insertBefore(40,60)

printList();
printListReverse()