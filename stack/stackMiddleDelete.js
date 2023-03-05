class Node {
  constructor(data){
    this.data = data
  }
}

class Stack1{
  constructor(){
     this.top = null
     this.count = 0
  }

  push(data){
    const newNode = new Node(data)
  
    if (this.top == null) {
      this.top = newNode
      this.count++
    }else{
      newNode.next = this.top
      this.top = newNode
      this.count++
    }
  
  }

  pop() {
    if (this.top == null) {
      return console.log("empty");
    }
    this.top = this.top.next
    this.count--
  }

  display(){
    if (this.top == null) {
      return console.log("empty");
    }
  
    let temp = this.top
    while(temp != null){
      console.log(temp.data);
      temp = temp.next
    }
  }
}

class Stack2{
  constructor(){
     this.top = null
  }

  push(data){
    const newNode = new Node(data)
  
    if (this.top == null) {
      this.top = newNode
    }else{
      newNode.next = this.top
      this.top = newNode
    }
  
  }

  pop() {
    if (this.top == null) {
      return console.log("empty");
    }
    this.top = this.top.next
  }

  display(){
    if (this.top == null) {
      return console.log("empty");
    }
  
    let temp = this.top
    while(temp != null){
      console.log(temp.data);
      temp = temp.next
    }
  }
}


const stack1 = new Stack1()

stack1.push(10)
stack1.push(20)
stack1.push(40)
stack1.push(30)
stack1.push(50)


const stack2 = new Stack2()

let middle = Math.floor(stack1.count/2)

function change(){
  let i = 1
  while (i <= middle) {
    stack2.push(stack1.top.data)
    stack1.pop()
    i++
  }
}

function change2(){
  let i = 1
  while (i <= middle) {
    stack1.push(stack2.top.data)
    stack2.pop()
    i++
  }
}

change()
stack1.pop()
change2()
stack1.display()