class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)
    if (this.root === null) {
      this.root = newNode
      return newNode
    } 

    const recursivelyCheck = (comparisonNode) => {
      if (newNode.value > comparisonNode.value) {
        // insert to the right, or recursively call 
        if (comparisonNode.right === null) {
          comparisonNode.right = newNode
        } else {
          recursivelyCheck(comparisonNode.right)
        }
      } else {
        // insert to the left, or recursively call
        if (comparisonNode.left === null) {
          comparisonNode.left = newNode
        } else {
          recursivelyCheck(comparisonNode.left)
        }
      }
    }

    recursivelyCheck(this.root)
    return newNode
  }
}

const tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(8)

console.log(JSON.stringify(tree))

const tree1 = new BinarySearchTree()

tree1.insert(10)
tree1.insert(15)
tree1.insert(7)
tree1.insert(8)

console.log(JSON.stringify(tree1))