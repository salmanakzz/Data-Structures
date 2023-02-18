class Trie {
  constructor(string) {
    this.root = new Map();
    for (let i = 0; i < string.length; i++) {
      this.buildTrie(i, string);
    }
  }

  buildTrie(index, string) {
    let node = this.root;
    for (let i = index; i < string.length; i++) {
      let letter = string.charAt(i);
      if (!node.has(letter)) {
        let newNode = new Map();
        node.set(letter, newNode);
      }
        node = node.get(letter);
      
    }
    node.set("*", null);
  }

  search(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      let letter = string.charAt(i);
      if (!node.has(letter)) {
        return false;
      }
      node = node.get(letter);
    }
    return node.has("*");
  }
}

const trie = new Trie("mannan");
console.log(trie.search("annan"));
// console.log(trie.root);
