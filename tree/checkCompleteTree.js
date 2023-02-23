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
  isCompleteTree(root) {
    if (!root) {
      // An empty tree is considered complete.
      return true;
    }

    const queue = [root];
    let foundNull = false;

    while (queue.length > 0) {
      const node = queue.shift();

      if (!node) {
        foundNull = true;
        continue;
      }

      if (foundNull) {
        return false;
      }

      queue.push(node.left);
      queue.push(node.right);
    }

    return true;
  }
}

const tree = new BinarySearchTree();

console.log(tree.isCompleteTree(tree.root));
