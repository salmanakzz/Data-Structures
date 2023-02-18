class Node {
  constructor(data) {
    this.data = data;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
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

  contains(data) {
    let currentNode = this.root;

    while (currentNode != null) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  removeNode(data) {
    this.removeNodeHelper(data, this.root, null);
  }
  removeNodeHelper(data, currentNode, parentNode) {
    while (currentNode != null) {
      if (data < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left != null && currentNode.right != null) {
          currentNode.data = this.getMinValue(currentNode.right);
          this.removeNodeHelper(
            currentNode.data,
            currentNode.right,
            currentNode
          );
        } else {
          if (parentNode == null) {
            if (currentNode.right == null) {
              this.root = currentNode.left;
            } else {
              this.root = currentNode.right;
            }
          } else {
            if (parentNode.left == currentNode) {
              if (currentNode.right == null) {
                parentNode.left = currentNode.left;
              } else {
                parentNode.left = currentNode.right;
              }
            } else {
              if (currentNode.right == null) {
                parentNode.right = currentNode.left;
              } else {
                parentNode.right = currentNode.right;
              }
            }
          }
        }
        break;
      }
    }
  }

  getMinValue(currentNode) {
    if (currentNode.left == null) {
      return currentNode.data;
    } else {
      return this.getMinValue(currentNode.left);
    }
  }

  inOrder(node) {
    if (node == null) {
      return;
    }
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
  preOrder(node) {
    if (node == null) {
      return;
    }
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  postOrder(node) {
    if (node == null) {
      return;
    }
    this.inOrder(node.left);
    this.inOrder(node.right);
    console.log(node.data);
  }

  findClosest(target){
    let currentNode = this.root
    let closest = currentNode.data

    while (currentNode != null) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.data)) {
        closest = currentNode.data
      }
      if (target < currentNode.data) {
        currentNode = currentNode.left
      }else if (target > currentNode.data) {
        currentNode = currentNode.right
      }else{
        break
      }
    }

    return closest
  }
}

const tree = new BinarySearchTree();

tree.addNode(10);
tree.addNode(8);
tree.addNode(11);
tree.addNode(4);
tree.addNode(9);
// console.log(tree.root);
// tree.inOrder(tree.root);
// tree.preOrder(tree.root);
// tree.postOrder(tree.root);

console.log(tree.findClosest(3));