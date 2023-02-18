class Node {
    constructor(data) {
      this.data = data;
    }
  }
  
  class Stack1 {
    constructor() {
      this.top = null;
      this.count = 0;
    }
    push(data) {
      const newNode = new Node(data);
      if (this.top == null) {
        this.top = newNode;
        this.count++;
      } else {
        newNode.next = this.top;
        this.top = newNode;
        this.count++;
      }
    }
    display() {
      let temp = this.top;
  
      if (temp == null) {
        return console.log("stack underflow");
      }
  
      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
    pop() {
      if (this.top == null) {
        return console.log("empty");
      }
      this.top = this.top.next;
      this.count--;
    }
  }
  class Stack2 {
    constructor() {
      this.top = null;
      this.count = 0;
    }
    push(data) {
      const newNode = new Node(data);
      if (this.top == null) {
        this.top = newNode;
        this.count++;
      } else {
        newNode.next = this.top;
        this.top = newNode;
        this.count++;
      }
    }
    display() {
      let temp = this.top;
  
      if (temp == null) {
        return console.log("stack underflow");
      }
  
      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
    pop() {
      if (this.top == null) {
        return console.log("empty");
      }
      this.top = this.top.next;
      this.count--;
    }
  }
  
  const stack1 = new Stack1()
  const stack2 = new Stack2()
  
  function undo(){
    stack2.push(stack1.top.data)
    stack1.pop()
  }
  function redo(){
    stack1.push(stack2.top.data)
    stack2.pop()
  }
  
  
  stack1.push(10);
  stack1.push(20);
  stack1.push(300);
  stack1.push(400);
  stack1.push(500);
  stack1.display();
  undo()
  undo()
  redo()
  console.log("------",);
  stack1.display()
  