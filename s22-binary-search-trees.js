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
      return this
    } 
    
    // recursive solution
    // const recursivelyCheck = (comparisonNode) => {
    //   if (newNode.value === comparisonNode.value) return undefined
    //   if (newNode.value > comparisonNode.value) {
    //     // insert to the right, or recursively call 
    //     if (comparisonNode.right === null) {
    //       comparisonNode.right = newNode
    //     } else {
    //       recursivelyCheck(comparisonNode.right)
    //     }
    //   } else {
    //     // insert to the left, or recursively call
    //     if (comparisonNode.left === null) {
    //       comparisonNode.left = newNode
    //     } else {
    //       recursivelyCheck(comparisonNode.left)
    //     }
    //   }
    // }
    // recursivelyCheck(this.root)
    // return this

    // iterative solution:
    let current = this.root 
    while(true) {
      if (val === current.value) return undefined
      if (val < current.value) { // it goes on left 
        if (current.left === null) { // there is no left
          current.left = newNode
          return this
        } else {
          current = current.left // there is already a left
        }
      } else if (val > current.value ) { // it goes right
        if (current.right === null) { // there is no right
          current.right = newNode
          return this
        } else {
          current = current.right // there is already a right
        }
      }
    }

  }

  find(val) {
    let currentNode = this.root
    while(true) {
      if (currentNode.value === val) {
        console.log(currentNode.value)
        return currentNode
      } else {
        if (val > currentNode.value) {
          // go to right node
          currentNode = currentNode.right 
        } else {
          // go to left node 
          currentNode = currentNode.left
        }
      }
    }
  }
}

const tree1 = new BinarySearchTree()

tree1.insert(10)
tree1.insert(15)
tree1.insert(7)
tree1.insert(8)

console.log(JSON.stringify(tree1))

console.log(tree1.find(7))
console.log(tree1.find(10))