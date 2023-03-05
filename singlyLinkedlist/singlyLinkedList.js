class Node{
    constructor(data){
        this.data = data;
    }
}


let  head = null;
let tail = null;

function addNode(data) {
    let newNode = new Node(data);

    if(head === null){
            head = newNode;
    }else{
        tail.next = newNode;
    }
    tail = newNode;
}

function printList(){
    if (head == null) {
        console.log("list empty");
        return
    }
    let temp = head;
    while(temp!= null){
        console.log(temp.data);
        temp = temp.next;
    }
}

function deleteNode(data) {
    let temp = head , prev = null;
    if (temp != null && temp.data == data) {
        head = temp.next;
        return; 
    }

     while(temp != null && temp.data != data){
        prev = temp;
        temp = temp.next;
     }
 
     if(temp == null){
        return;
     }

     if (temp == tail) {
        tail = prev;
        tail.next = null;
        return;
     }

     prev.next = temp.next;
}

function insertAfter(nextTo, data){
    let newNode = new Node(data)
    let temp =  head

    while (temp != null && temp.data != nextTo) {
        temp = temp.next
    }

    if (temp == null) {
        return
    }

    if (temp == tail){
        tail.next = newNode
        tail = newNode
        return
    }

    newNode.next = temp.next;
    temp.next = newNode;
}

function removeDuplicates(){
    let temp = head;

    while (temp != null){
        let next = temp.next

        while (next != null && next.data == temp.data){
            next = next.next
        }

        temp.next  = next

        if (next == tail && temp.data == next.data){
            tail = temp
            tail.next = null
        }

        temp = next
    }
}

addNode(10); 
addNode(10);
addNode(10);
addNode(20);
addNode(50);
addNode(50);

printList()

console.log('--------------');

deleteNode(20)

printList()

console.log('--------------');

insertAfter(50, 30)

removeDuplicates()

printList()