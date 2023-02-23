class Node {
    constructor(data) {
      this.data = data;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null
    }
  
    addNode(data) {
      const newNode = new Node(data);
      let currentNode = this.root;
  
      if (currentNode == null) {
        this.root = newNode;
        return;
      }
  
      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.data) {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
            if (data < currentNode.data) {
              currentNode.left = newNode;
              break;
            } else {
              currentNode.right = newNode;
              break;
            }
          }
        }
      }
    }
    isBST() {
      return this.isBSTHelper(this.root, -Infinity, Infinity);
    }
  
    isBSTHelper(node, minVal, maxVal) {
      if (!node) {
        return true;
      }
  
      if (node.data <= minVal || node.data >= maxVal) {
        return false;
      }
  
      const left = this.isBSTHelper(node.left, minVal, node.data);
      const right = this.isBSTHelper(node.right, node.data, maxVal);
  
      return left && right;
    }
  }
  
  const tree = new BinarySearchTree();
  tree.addNode(10);
  tree.addNode(8);
  tree.addNode(11);
  tree.addNode(4);
  tree.addNode(9);
  console.log(tree.isBST());
  